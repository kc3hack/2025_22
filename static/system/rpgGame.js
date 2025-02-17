// セリフのテキストを取得
const speechBoxElem = document.getElementById("speechBox");

// セリフを表示
function writeSpeech(text){
    speechBoxElem.innerText = text;
}


//指定文字数まで文字を加算
function Loop(text,i,outText){
    if((i)<text.length){
        outText+=text.charAt(i);
        writeSpeech(outText);
        i++;
        setTimeout(() =>Loop(text,i,outText),45);
    }
}
// 引数の文字列を１文字づつ表示する
function showSpeech(text){
    /* 1文字づつtextに書き出すプログラム */
    let i=0;
    let outText="";
    Loop(text,i,outText);
}

// キャラクターを指定して文字表示
function talkChacac(character,text){
    showSpeech(`${character}「${text}」`);
}

