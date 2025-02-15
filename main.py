from flask import Flask, request, render_template

app = Flask(__name__)
    
@app.route('/')
def index():
    return render_template('index.html')

@app.route("/form")
def form():
    return render_template("form.html")
    
if __name__ == '__main__':
    app.debug = True    #デバッグモードを利用する
    app.run()