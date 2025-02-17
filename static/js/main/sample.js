// main(jsOriginal)

// BGMを用意
const yoakeBGM = new Audio("/static/bgm/yoake.m4a");
yoakeBGM.volume = 0.5;  // 音量設定（0~1)
yoakeBGM.play();    // 再生開始
yoakeBGM.loop = true;   // ループ

// 会話内容
new dialog("aoi","どこに行くのですか？","mainStory");
new dialog("shota","大学に行ってくる!","mainStory");
new dialog("rojin","それはおいしいのかね？","mainStory");
new dialog("uranaishi","何を言ってるんじゃ？","mainStory");

function nextBtnClick(){
    const nowStory = getStory("mainStory");
    if(nowStory!=null){
        talkChacac(nowStory.getCharacterId(),nowStory.getWord());
        showBtn();
    }else if(getChoiceStatus()){
        console.log(getChoiceStatus());
        showChoice("あなたの行動を選んでください．","プログラミングする","Java演習する","C演習する");
        useChoise();
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

// 初回の文字を表示
window.onload = setTimeout(nextBtnClick,500);