// Audio
const tapAudio = new Audio("/static/se/tap.mp3");   // tapのSE

// tap音をプレイ
function playTapSE(){
    tapAudio.play();    // tapのSEを再生
}

// tap音をプレイし，ページを移動
function chengePlayTapSe(url){
    tapAudio.play();    // tapのSEを再生
    setTimeout(() =>{
        window.location.replace(url);
    },1500);
}

// seをプレイ
function playSe(fileName){
    const newSe = new Audio(`/static/se/${fileName}`);
    newSe.play();
}

// 現在のBGM
let nowBgm = null;

// bgmをプレイ
function playBGM(fileName){
    const BGM = new Audio(`/static/bgm/${fileName}`);
    if(nowBgm!=null){
        nowBgm.pause();
    }
    nowBgm = BGM;
    BGM.volume = 0.5;  // 音量設定（0~1)
    BGM.play();    // 再生開始
    BGM.loop = true;   // ループ
}