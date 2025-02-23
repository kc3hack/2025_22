from flask import Flask, request, render_template,redirect,url_for,session,jsonify
from flask_socketio import SocketIO, join_room, leave_room, send, emit
from waitress import serve
from dotenv import load_dotenv
import os
import base64
import participantsDB

# キーワード
key = ["チク","デン","?ロ"]
ans = ["竹","池","城"]

# 一致の確認
def check(text):
    for i in range(len(key)):
        if(key[i]==text):
            return ans[i]
    return None

app = Flask(__name__)

socketio = SocketIO(app, cors_allowed_origins="*")

# 環境変数の利用
load_dotenv()

app.secret_key = os.getenv('SECRETKEY')
    
# トップページ
@app.route('/')
def index():
    return render_template('index.html')

# プレイページ
@app.route("/play")
def Play():
    return render_template("/play/play.html")

# スタート画面
@app.route("/play/start")
def PlayStart():
    return render_template("/play/start/start.html")

# キャラクター選択
@app.route("/play/choseCharacter")
def choseCharacter():
    return render_template("/play/choseCharacter/choseCharacter.html")

# ルーム名
@app.route("/play/entryRoom/<string:character>")
def entryRoom(character):
    if(character=="shota"):
        session["character"] = "shota"
    elif(character=="aoi"):
        session["character"] = "aoi"
    return render_template("play/entryRoom/entryRoom.html",mes="")

# ルームの登録
@app.route("/play/setRoom",methods=["POST"])
def setRoom():
    roomName = request.form["roomName"]
    if(session["character"]=="shota"):
        if(participantsDB.setShota(roomName)):
            session["roomName"] = roomName
            return redirect("/play/chapter01/as")
        else:
            return render_template("play/entryRoom/entryRoom.html",mes="すでに登録されています．")
    elif(session["character"]=="aoi"):
        if(participantsDB.setAoi(roomName)):
            session["roomName"] = roomName
            return redirect("/play/chapter01/aa")
        else:
            return render_template("play/entryRoom/entryRoom.html",mes="すでに登録されています．")
    else:
        return "エラー"
        
# ヒントシステム
@app.route("/hinto")
def showHint():
    return render_template("/hintoSystem/hinto.html")

# ヒントシステム(QRコードを表示)
@app.route("/hinto/showQR")
def showQR():
    return render_template("/hintoSystem/showQR.html")

# QRシステム
@app.route("/hinto/QRSystem")
def PlayChapter03QRSystem():
    return render_template("/hintoSystem/QR.html")

# 文字ヒントゲットシステム
@app.route("/hinto/mojiSystem")
def PlayChapter04HintoGet():
    return render_template("/hintoSystem/hintoGet.html")

# POSTデータを取得
@app.route("/hinto/post",methods=['POST'])
def sendPhoto():
    #Img = request.files['Img'].read()
    #npArray = numpy.frombuffer(Img,numpy.uint8)
    #cvImage = cv2.imdecode(npArray,cv2.IMREAD_COLOR)
    '''
    cv2.imshow('view',cvImage)
    cv2.waitKey(0)
    '''
    dt = request.form["input"]
    #msg = hintoOcr.chengeImage(cvImage)
    msg = check(dt)
    return render_template("/hintoSystem/ans.html",msg=msg)


# エンドロール
@app.route("/play/chapterEnd")
def PlayChapterEnd():
    if("character" in session):
        print("削除")
        if(session["character"]=="shota"):
            participantsDB.outShota(session["roomName"])
        elif(session["character"]=="aoi"):
            participantsDB.outAoi(session["roomName"])
    session.clear() # セッションを削除
    return render_template("/play/end/end.html")

# クレジット
@app.route("/play/credit")
def credit():
    return render_template("/play/credit/credit.html")

# チャットシステム
@app.route("/system/chat")
def chatSystem():
    return render_template("/system/chat.html")


# ストーリシステム
@app.route('/play/<string:chapter>/<string:code>')
def showStory(chapter,code):
    return render_template("/system/rpgLayout.html",jsOriginal = f"/{chapter}/{code}")

# 謎解きシステム
@app.route('/play/nazo/<string:chapter>/<string:code>')
def showNazo(chapter,code):
    return render_template("/system/nazotokiLayout.html",jsOriginal = f"/{chapter}/{code}")

# 裏コマンド
@app.route('/sys/sideMode')
def sideMode():
    return render_template("/sideMode/sideMode.html")


# ページが存在しない（404）
@app.errorhandler(404)
def pageNotFound(e):
    return render_template("error.html")

# sessionAPI
@app.route("/sessionAPI/character")
def getCharacter():
    if "character" in session:
        return jsonify({"character":session["character"]})
    else:
        return jsonify({"character":"none"})
    
# 登録データの確認
@app.route("/session/info")
def sessionInfo():
    characterName = "情報なし"
    roomName = "情報なし"
    if "character" in session:
        characterName = session["character"]
    if "roomName" in session:
        roomName = session["roomName"]

    return f"キャラクター:{characterName} ルーム名:{roomName}<br><a href='/sys/sideMode'>戻る</a>"


#--------------------------------------------通信関係--------------------------------------------

charaName = {"shota":"翔太","aoi":"葵"}

# メインRPG-------------------
# クライアントが参加した時の処理
@socketio.on("join")
def handle_join():
    join_room(session["roomName"])

# 選択肢へ参加
@socketio.on("joinChoice")
def joinChoice():
    emit("joinCharacter",{"character":session["character"]},to=session["roomName"])

# 選択肢を送信
@socketio.on("choiseNum")
def choiceNum(data):
    num = data["choiceNum"]
    emit("startChoice",{"choiceNum":num},to=session["roomName"])

# 選択肢のスタート
@socketio.on("choiceStart")
def choiceStart():
    emit("start",to=session["roomName"])
    
# チャット-------------------
@socketio.on("chatJoin")
def chatJoin():
    join_room(session["roomName"])
    emit("message", {"character": "system", "text": f"{charaName[session["character"]]}がルーム「{session["roomName"]} 」に参加しました"}, to=session["roomName"])

# クライアントからチャットメッセージを受信した時の処理
@socketio.on("send_chat")
def handle_send_chat(data):
    text = data["text"]
    emit("message", {"character": session["character"], "text": text}, to=session["roomName"]) # emit に room (toパラメータ) を使用

# 謎解き-------------------
# 謎解きシステムへの参加
@socketio.on("joinNazo")
def joinChoice():
    join_room(session["roomName"])
    emit("joinCharacterNazo",{"character":session["character"]},to=session["roomName"])

# 謎スタート
@socketio.on("memberOK")
def nazoStart():
    emit("nazoStart",to=session["roomName"])

if __name__ == '__main__':
    serve(app,host='0.0.0.0',port=5000,threads=10)
#-----------------------------------------------------------------------------------------------
'''
if __name__ == '__main__':
    app.debug = True    #デバッグモードを利用する
    app.run(host="0.0.0.0",port=5000)
'''