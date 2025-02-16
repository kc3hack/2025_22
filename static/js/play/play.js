// Audio
const tapAudio = new Audio("/static/se/tap.mp3");   // tapのSE

// 同意ボタン
function agreeBtn(){
    document.documentElement.requestFullscreen();   // 全画面表示
    document.getElementById("note").style.display = 'none'; // note画面を非表示
    tapAudio.play();    // tapのSEを再生
    document.getElementById("gameScreen").contentWindow.playBGM();  // iframe内でBGMを再生
}

// 警告を表示
function showWarning(){
    document.getElementById("warning").style.display = 'block';
}

// 警告を非表示
function hideWarning(){
    document.getElementById("warning").style.display = 'none';
}

// 画面変更時のイベント
window.addEventListener("orientationchange",screenCheck);    // 画面の向きを変更
window.addEventListener("fullscreenchange",screenCheck);    // 全画面表示に関する変更

// 全画面かどうかチェック(正常時:true)
function getFullScreenStatus(){
    if(!document.fullscreenElement){
       return false;
    }else if(document.exitFullscreen){
       return true;
    }
}

//  画面状態を取得（正常：true）
function getScreenStatus(){
    let orientation = screen.orientation.type;
    if(orientation=="landscape-primary"||orientation=="portrait-secondary"){
        return true;
    }else{
        return false;
    }
}

// 画面異常チェック(異常時警告を表示)
function screenCheck(){
    if(getFullScreenStatus()&&getScreenStatus()){
        hideWarning();
    }else{
        showWarning();
    }
}

// main
/*
window.onload = setTimeout(screenCheck,1000);  // 画面異常を確認
*/