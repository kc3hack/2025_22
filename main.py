from flask import Flask, request, render_template

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
    return render_template("index.html")

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
    


if __name__ == '__main__':
    app.debug = True    #デバッグモードを利用する
    app.run(host="0.0.0.0",port=5000)