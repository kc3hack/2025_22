// 要素
const textBox = document.getElementById("textBox");
const messageBox = document.getElementById("mesBox");

let chat = "";

// キャラクター名称情報
const characterNameInfo = {"shota":"翔太","aoi":"葵","system":"システム通知"};

// 話す（チャット欄への書き込み）
function talk(name,text){
    chat += `${characterNameInfo[name]}:「${text}」\n`;
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