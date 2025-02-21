playBGM("suzukaze.mp3");

// 右クリックの禁止
document.oncontextmenu = function() {return false;}

function startBtn(){
    chengePlayTapSe("/play/prologue/a");
}

function creditBtn(){
    chengePlayTapSe("/play/credit");
}