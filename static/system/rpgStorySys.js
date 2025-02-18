// コード分析
function checkCode(story){
    const characterCode = story.getCharacterId();
    if(characterCode=="playSe"){
        console.log("SEが指定された");
    }else if(characterCode=="playBgm"){
        console.log("BGMが指定された")
    }else if(characterCode=="showCharacter"){
        console.log("キャラクター表示");
    }else if(characterCode=="hideCharacter"){
        console.log("キャラクター非表示")
    }else if(characterCode=="chengeBackImg"){
        console.log("背景変更")
    }else{
        talkCharacter(story.getCharacterId(),story.getWord());
    }
}

// ボタンがクリックされたとき
function nextBtnClick(){
    playTapSE();
    if(getStoryStatus("mainStory1")){
        // ストーリー1
        const nowStoryMain = getStory("mainStory1");
        checkCode(nowStoryMain);
    }else if(getChoiceStatus()){
        // 選択肢
        // 正しい選択肢
        setNextChoice(okNum);
        showChoice(choiceMes,choiceText[0],choiceText[1],choiceText[2]);
    }else if(getStoryStatus("mainStory2")){
        // ストーリー2
        const nowStoryMain2 = getStory("mainStory2");
        checkCode(nowStoryMain2);
    }else{
        nextPage();
    }
}

// 分岐時に実行される
function next(){
    playTapSE();
    if(getStoryStatus(`choice${selectNum}Story`)){
        const nowStoryChoice = getStory(`choice${selectNum}Story`);
        checkCode(nowStoryChoice);
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