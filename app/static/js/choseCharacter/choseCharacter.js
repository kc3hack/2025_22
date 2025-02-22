// 右クリックの禁止
document.oncontextmenu = function() {return false;}

playBGM("yoake.m4a");

const mesSpeech = document.getElementById("message");

function useShota(){
    mesSpeech.innerText = "しばらくお待ちください．";
    chengePlayTapSe("/play/entryRoom/shota");
}

function useAoi(){
    mesSpeech.innerText = "しばらくお待ちください．";
    chengePlayTapSe("/play/entryRoom/aoi");
}