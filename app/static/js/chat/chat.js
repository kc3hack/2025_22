// 要素
const textBox = document.getElementById("textBox");
const messageBox = document.getElementById("mesBox");

let chat = "";

// 話す（チャット欄への書き込み）
function talk(name,text){
    chat += `${name}:「${text}」\n`;
    messageBox.innerText = chat;
    messageBox.scrollTop = messageBox.scrollHeight;
}

// テキストボックスのデータ取得
function getTextBox(){
    return textBox.value;
}

// 送信
function submit(){
    playTapSE();
    sendChat(getTextBox());
    textBox.value = "";
}