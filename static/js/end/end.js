// 右クリックの禁止
document.oncontextmenu = function() {return false;}
const movie = document.getElementById("movie");
movie.play();
movie.volume = 0.4;
movie.addEventListener("ended",()=>{
    window.location.replace("/play/start");
});