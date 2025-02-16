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