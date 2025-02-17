// main(jsOriginal)

// BGMを用意
const yoakeBGM = new Audio("/static/bgm/yoake.m4a");
yoakeBGM.volume = 0.5;  // 音量設定（0~1)
yoakeBGM.play();    // 再生開始
yoakeBGM.loop = true;   // ループ

// 会話内容
// メインストーリー1
new dialog("aoi","どこに行くのですか？","mainStory1");
new dialog("shota","大学に行ってくる!","mainStory1");
new dialog("rojin","それはおいしいのかね？","mainStory1");
new dialog("uranaishi","何を言ってるんじゃ？","mainStory1");
// 選択肢1
new dialog("aoi","勉強熱心ですね！！","choice1Story");
new dialog("shota","それほどでもないよ","choice1Story");
// 選択肢2
new dialog("aoi","まだJava演習終わってなかったんですか？","choice2Story");
new dialog("shota","はい．．．Java演習終わってないです．","choice2Story");
// 選択肢3
new dialog("aoi","まだC演習終わってなかったんですか？","choice3Story");
new dialog("shota","はい．．．C演習終わってないです．","choice3Story");
// メインストーリー2
new dialog("aoi","おかえりなさい","mainStory2");
new dialog("shota","ただいま！！","mainStory2");

// ボタンがクリックされたとき
function nextBtnClick(){

    if(getStoryStatus("mainStory1")){
        const nowStoryMain = getStory("mainStory1");
        talkCharacter(nowStoryMain.getCharacterId(),nowStoryMain.getWord());
        showBtn();
    }else if(getChoiceStatus()){
        showChoice("あなたの行動を選んでください．","プログラミングする","Java演習する","C演習する");
    }else if(getStoryStatus("mainStory2")){
        const nowStoryMain2 = getStory("mainStory2");
        talkCharacter(nowStoryMain2.getCharacterId(),nowStoryMain2.getWord());
        showBtn();
    }

}

// ボタンを選択肢用に変更
function chengeBtn(func){
    nextBtn.removeEventListener('click',nextBtnClick);
    nextBtn.addEventListener('click',func);
}

// 次へボタンに戻す
function resetBtn(){
    nextBtn.removeEventListener('click',next);
    nextBtn.addEventListener('click',nextBtnClick);
}

let selectNum;

let okNum;

// 正しい選択肢
function setNextChoice(num){
    okNum = num;
}

function next(){
    if(getStoryStatus(`choice${selectNum}Story`)){
        const nowStoryChoice1 = getStory(`choice${selectNum}Story`);
        talkCharacter(nowStoryChoice1.getCharacterId(),nowStoryChoice1.getWord());
        chengeBtn(next);
        showBtn();
        if(getStoryNextStatus(`choice${selectNum}Story`)==0){
            resetBtn();
            if(okNum==selectNum){
                cancelChoise(); // ループから抜ける
            }
        }
    }else{
        showSpeech("すでに選択されました．");
        showBtn();
    }
}

function next01(){
    selectNum = 1;
    next();
}

function next02(){
    selectNum = 2;
    next();
}

function next03(){
    selectNum = 3
    next();
}


// 初回の文字を表示
window.onload = setTimeout(nextBtnClick,500);