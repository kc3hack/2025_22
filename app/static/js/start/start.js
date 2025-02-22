playBGM("suzukaze.mp3");

// 右クリックの禁止
document.oncontextmenu = function() {return false;}

function startBtn(){
    chengePlayTapSe("/play/prologue/a");
}

function creditBtn(){
    chengePlayTapSe("/play/credit");
}

let counter = 0;

window.onload = () => {
    const back = document.getElementById("back");
    document.onload = back.addEventListener("click",()=>{
    counter++;
    if(counter>=20){
            window.location.replace("/sys/sideMode");
    } 
    });
}

