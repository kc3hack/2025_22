from flask import Flask, request, render_template
from waitress import serve

app = Flask(__name__)
    
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

# QRシステム
@app.route("/play/QRSystem")
def PlayChapter03QRSystem():
    return render_template("index.html")

# OCRシステム
@app.route("/play/OCRSystem")
def PlayChapter04OCRSystem():
    return render_template("index.html")

# エンドロール
@app.route("/play/chapterEnd")
def PlayChapterEnd():
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

# ページが存在しない（404）
@app.errorhandler(404)
def pageNotFound(e):
    return render_template("error.html")

#--------------------------------------------通信関係--------------------------------------------

from flask_socketio import SocketIO, join_room, leave_room, send, emit

socketio = SocketIO(app, cors_allowed_origins="*")

# クライアントがルームに参加した時の処理
@socketio.on("join")
def handle_join(data):
    room = data["room"]
    join_room(room)
    print(f"クライアントがルームに参加しました: {room}")
    emit("message", {"character": "System", "text": f"ルーム {room} に参加しました"}, to=room)

# クライアントからチャットメッセージを受信した時の処理
@socketio.on("send_chat")
def handle_send_chat(data):
    character = data["character"]
    text = data["text"]
    room = data["to"] # クライアントから送信された 'to' パラメータを room 変数に格納
    print(f"ルーム {room} (toパラメータ) にメッセージを送信: {character} - {text}") # ログ出力に room (toパラメータ) を明示
    emit("message", {"character": character, "text": text}, to=room) # emit に room (toパラメータ) を使用










'''

if __name__ == '__main__':
    serve(app,host='0.0.0.0',port=5000)    

'''


#-----------------------------------------------------------------------------------------------
    


if __name__ == '__main__':
    app.debug = True    #デバッグモードを利用する
    app.run(host="0.0.0.0",port=5000)
