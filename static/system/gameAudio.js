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

// bgmをプレイ
function playBGM(music){
    const BGM = new Audio(`/static/bgm/${music}`);
    BGM.volume = 0.5;  // 音量設定（0~1)
    BGM.play();    // 再生開始
    BGM.loop = true;   // ループ
}