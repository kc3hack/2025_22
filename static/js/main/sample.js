// main(jsOriginal)






// BGMを用意
const yoakeBGM = new Audio("/static/bgm/yoake.m4a");
yoakeBGM.volume = 0.5;  // 音量設定（0~1)
yoakeBGM.play();    // 再生開始
yoakeBGM.loop = true;   // ループ

// 会話内容
const msg = [["aoi","shota"],["どこに行くのですか？","大学に行ってくる！！"]];
let i = 0;
function nextBtnClick(){
    if(i<msg.length){
        talkChacac(msg[0][i],msg[1][i]);
        showBtn();
        i++;
    }else{
        showChoice("あなたの行動を選んでください．","プログラミングする","Java演習する","C演習する");
    }
}

function next01(){
    talkChacac("aoi","プログラミング頑張るのですよ！！");
    showBtn();
}

function next02(){
    talkChacac("aoi","翔太さん、まだJava演習終わってなかったんですね！！");
    showBtn();
}

function next03(){
    talkChacac("aoi","翔太さん、まだC演習やってるんですか！！");
    showBtn();
}

nextBtnClick();


/* 次へボタンのイベント */
nextBtn.addEventListener("click",nextBtnClick);
/* 選択肢 */
choice1.addEventListener("click",next01);
choice2.addEventListener("click",next02);
choice3.addEventListener("click",next03);