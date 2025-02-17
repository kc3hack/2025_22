// ボタンがクリックされたとき
function nextBtnClick(){
    playTapSE();
    if(getStoryStatus("mainStory1")){
        // ストーリー1
        const nowStoryMain = getStory("mainStory1");
        talkCharacter(nowStoryMain.getCharacterId(),nowStoryMain.getWord());
    }else if(getChoiceStatus()){
        // 選択肢
        // 正しい選択肢
        setNextChoice(okNum);
        showChoice(choiceMes,choiceText[0],choiceText[1],choiceText[2]);
    }else if(getStoryStatus("mainStory2")){
        // ストーリー2
        const nowStoryMain2 = getStory("mainStory2");
        talkCharacter(nowStoryMain2.getCharacterId(),nowStoryMain2.getWord());
    }else{
        nextPage();
    }
}

// 分岐時に実行される
function next(){
    playTapSE();
    if(getStoryStatus(`choice${selectNum}Story`)){
        const nowStoryChoice1 = getStory(`choice${selectNum}Story`);
        talkCharacter(nowStoryChoice1.getCharacterId(),nowStoryChoice1.getWord());
        chengeBtn(next);
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