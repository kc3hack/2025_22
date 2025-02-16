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
window.addEventListener("fullscreenchange",screenCheck);    // 全画面表示に関する変更

// 画面の向きをチェック：警告表示
function screenOrientationCheck(){
    if(getScreenStatus()){
        hideWarning();
    }else{
        showWarning();
    }
}

// 全画面かどうかチェック(正常時:true)
function getFullScreenStatus(){
    if(!document.fullscreenElement){
       return false;
    }else if(document.exitFullscreen){
       return true;
    }
}

// 画面異常チェック
function screenCheck(){
    if(getFullScreenStatus()&&getScreenStatus()){
        hideWarning();
    }else{
        showWarning();
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