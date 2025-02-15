// Audio
const tapAudio = new Audio("/static/se/tap.mp3");
const bgmAudio = new Audio("static/bgm/suzukaze.mp3");

// 同意ボタン
function agreeBtn(){
    document.documentElement.requestFullscreen();
    document.getElementById("note").style.display = 'none';
    tapAudio.play();
    bgmAudio.play();
    bgmAudio.loop = true;   
    screenOrientationCheck();
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
window.addEventListener("orientationchange",screenOrientationCheck);    // 画面の向きを変更
window.addEventListener("fullscreenchange",screenFullCheck);    // 全画面表示に関する変更

// 画面の向きをチェック：警告表示
function screenOrientationCheck(){
    if(getScreenStatus()){
        hideWarning();
    }else{
        showWarning();
    }
}

// 全画面かどうかチェック：警告表示
function screenFullCheck(){
    if(window.fullScreen&&getScreenStatus()){
       hideWarning(); 
    }else{
        showWarning();
    }
}

//  画面状態を取得（正常：true）
function getScreenStatus(){
    if(window.orientation.angle==undefined&&(Math.abs(window.orientation)==90)){
        return true;
    }else{
        return false;
    }
}