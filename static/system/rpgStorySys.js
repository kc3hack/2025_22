// 開発者モード 
let debug = false;


// コード分析
function checkCode(story,func){
    const characterCode = story.getCharacterId();
    const argument = story.getWord();
    if(characterCode=="playSe"){
        playSe(argument);
        func();
    }else if(characterCode=="playBgm"){
        playBGM(argument);
        func();
    }else if(characterCode=="showCharacter"){
        showCharacter(argument);
        func();
    }else if(characterCode=="hideCharacter"){
        hideCharacter(argument);
        func();
    }else if(characterCode=="chengeBackImg"){
        chengeBackImg(argument);
        func();
    }else if(characterCode=="showTempImage"){
        showTempImage(argument);
        func();
    }else if(characterCode=="hideTempImage"){
        hideTempImage();
        func();
    }else{
        talkCharacter(story.getCharacterId(),story.getWord());
    }
}

// 次の話へ（メインストーリー）
function nextStory(){
    if(getStoryStatus("mainStory1")){
        // ストーリー1
        const nowStoryMain = getStory("mainStory1");
        checkCode(nowStoryMain,nextStory);
    }else if(getChoiceStatus()){
        // 選択肢
        // 正しい選択肢
        setNextChoice(okNum);
        showChoice(choiceMes,choiceText[0],choiceText[1],choiceText[2]);
    }else if(getStoryStatus("mainStory2")){
        // ストーリー2
        const nowStoryMain2 = getStory("mainStory2");
        checkCode(nowStoryMain2,nextStory);
    }else{
        if(!debug){
            nextPage();
        }
    }
}


// ボタンがクリックされたとき（通常ストーリー）
function nextBtnClick(){
    playTapSE();
    nextStory();
}

// 分岐時に実行される（次へボタンがクリックされたとき）
function next(){
    playTapSE();
    nextChoiceStory();
}

// 分記自に次に実行される
function nextChoiceStory(){
    if(getStoryStatus(`choice${selectNum}Story`)){
        const nowStoryChoice = getStory(`choice${selectNum}Story`);
        checkCode(nowStoryChoice,nextChoiceStory);
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

// キャラクターIDの存在確認
function characterIdStatus(characterId){
    return characterSet[characterId]!= undefined ? true:false;
}

// ストーリーIDの存在確認
function storyIdStatus(storyId){
    return storyKey[storyId]!=undefined ? true:false;
}


