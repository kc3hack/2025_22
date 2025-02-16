const bgmAudio = new Audio("/static/bgm/suzukaze.mp3");  // bgm:suzukaze
bgmAudio.volume = 0.5;

function playBGM(){
    bgmAudio.play();    // bgm:suzukazeを再生
    bgmAudio.loop = true;   // bgmをループ
}

function startBtn(){
    chengePlayTapSe("/play/sample");
}