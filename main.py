from flask import Flask, request, render_template

app = Flask(__name__)
    
@app.route('/')
def index():
    return render_template('index.html')

@app.route("/play")
def Play():
    return render_template("/play/play.html")

@app.route("/play/start")
def PlayStart():
    return render_template("/play/00/start.html")

##@app.route("/play/note")
##def PlayNote():
##    return render_template("/play/00/note.html")

@app.route("/play/chapter00")
def PlayChapter00():
    return render_template("index.html")

@app.route("/play/chapter01/A")
def PlayChapter01A():
    return render_template("index.html")

@app.route("/play/chapter01/B")
def PlayChapter01B():
    return render_template("index.html")

@app.route("/play/chapter01/mystery")
def PlayChapter01Mystery():
    return render_template("index.html")

@app.route("/play/chapter02/A")
def PlayChapter02A():
    return render_template("index.html")

@app.route("/play/chapter02/B")
def PlayChapter02B():
    return render_template("index.html")

@app.route("/play/chapter02/mystery")
def PlayChapter02Mystery():
    return render_template("index.html")

@app.route("/play/chapter03/A")
def PlayChapter03A():
    return render_template("index.html")

@app.route("/play/chapter03/B")
def PlayChapter03B():
    return render_template("index.html")

@app.route("/play/chapter03/mystery")
def PlayChapter03Mystery():
    return render_template("index.html")

@app.route("/play/chapter03/QRSystem")
def PlayChapter03QRSystem():
    return render_template("index.html")

@app.route("/play/chapter04/A")
def PlayChapter04A():
    return render_template("index.html")

@app.route("/play/chapter04/mystery")
def PlayChapter04Mystery():
    return render_template("index.html")

@app.route("/play/chapter04/OCRSystem")
def PlayChapter04OCRSystem():
    return render_template("index.html")

@app.route("/play/chapter04/B")
def PlayChapter04B():
    return render_template("index.html")

@app.route("/play/chapter05")
def PlayChapter05():
    return render_template("index.html")

@app.route("/play/chapterEnd")
def PlayChapterEnd():
    return render_template("index.html")

@app.route("/play/sample")
def PlaySample():
    return render_template("/play/sample.html")

@app.route("/system/chat")
def chatSystem():
    return render_template("/system/chat.html")


if __name__ == '__main__':
    app.debug = True    #デバッグモードを利用する
    app.run(host="0.0.0.0",port=5000)