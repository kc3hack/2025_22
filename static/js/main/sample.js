// main(jsOriginal)

// BGMを用意
const yoakeBGM = new Audio("/static/bgm/yoake.m4a");
yoakeBGM.volume = 0.5;  // 音量設定（0~1)
yoakeBGM.play();    // 再生開始
yoakeBGM.loop = true;   // ループ

// ボタンがクリックされたとき
function nextBtnClick(){
    if(getStoryStatus("mainStory1")){
        // ストーリー1
        const nowStoryMain = getStory("mainStory1");
        talkCharacter(nowStoryMain.getCharacterId(),nowStoryMain.getWord());
        showBtn();
    }else if(getChoiceStatus()){
        // 選択肢
        // 正しい選択肢
        setNextChoice(1);
        showChoice("あなたの行動を選んでください．","プログラミングする","Java演習する","C演習する");
    }else if(getStoryStatus("mainStory2")){
        // ストーリー2
        const nowStoryMain2 = getStory("mainStory2");
        talkCharacter(nowStoryMain2.getCharacterId(),nowStoryMain2.getWord());
        showBtn();
    }
}

// 分岐時に実行される
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

// 初回の文字を表示
window.onload = setTimeout(nextBtnClick,500);