


function setNarration(text,storyId){
    if(storyIdStatus(storyId)){
        new dialog("narration",text,storyId);
    }
}

function setTalk(characId,text,storyId){
    if(characterIdStatus(characId)&&storyIdStatus(storyId)){
        new dialog(characId,text,storyId);
    }else{
        console.error("setTalk:指定されたキャラクターIDまたはストーリーidが存在しません．");
    }
}

function characterIdStatus(characterId){
    return characterSet[characterId]!= undefined ? true:false;
}

function storyIdStatus(storyId){
    return storyKey[storyId]!=undefined ? true:false;
}

function setShowCharacter(characId,storyId){
    if(characterIdStatus(characId)&&storyIdStatus(storyId)){
        new dialog("showCharacter",characId,storyId);
    }else{
        console.error("setShowCharacter:指定されたキャラクターIDまたはストーリーidが存在しません．");
    }
}

function setHideCharacter(characId,storyId){
    if(characterIdStatus(characId)&&storyIdStatus(storyId)){
        new dialog("hideCharacter",characId,storyId);
    }else{
        console.error("setHideCharacter:指定されたキャラクターIDまたはストーリーidが存在しません．");
    }
}

function setPlayBgm(fileName,storyId){
    if(storyIdStatus(storyId)){
        new dialog("playBgm",fileName,storyId);
    }else{
        console.error("setPlayBgm:指定されたストーリーIDは存在しません．");
    }
}

function setPlaySe(fileName,storyId){
    if(storyIdStatus(storyId)){
        new dialog("playSe",fileName,storyId);
    }else{
        console.error("setPlaySe:指定されたストーリーIDは存在しません．");
    }
}   

function setBackImage(imageName,storyId){
    if(storyIdStatus(storyId)){
        new dialog("chengeBackImg",imageName,storyId);
    }else{
        console.error("setBackImage:指定されたストーリーIDは存在しません．");
    }
}


// メインストーリー1
// developMent();

let nowStoryName = "mainStory1";
setPlayBgm("yoake.m4a",nowStoryName);
setShowCharacter("aoi",nowStoryName);
setShowCharacter("aoi",nowStoryName);
setNarration("翔太と葵のとある１日．．．",nowStoryName);
setBackImage("yuhi.jpg",nowStoryName);
setTalk("aoi","どこに行くのですか？",nowStoryName);
setTalk("shota","大学に行ってくる!",nowStoryName);
setNarration("なぜだか，謎の老人と占い師もやってきました．",nowStoryName);
setShowCharacter("rojin",nowStoryName);
setShowCharacter("uranaishi",nowStoryName);
setPlayBgm("suzukaze.mp3",nowStoryName);
setTalk("rojin","それはおいしいのかね？",nowStoryName);
setTalk("uranaishi","何を言ってるんじゃ？",nowStoryName);
setTalk("matigai","これは間違いです．",nowStoryName);
setTalk("rojin","これも間違い","sonzaishinaiStory");
setNarration("二人はさっていった",nowStoryName);
setBackImage("uranainoheya.png",nowStoryName);
setHideCharacter("uranaishi",nowStoryName);
setHideCharacter("rojin",nowStoryName);
// 選択肢を設定
setChoice(1,"あなたの行動を選択してください．","プログラムの勉強をする","Java演習をする","C演習をする");

// 選択肢1
nowStoryName = "choice1Story"
setTalk("aoi","勉強熱心ですね！！",nowStoryName);
setTalk("shota","それほどでもないよ",nowStoryName);

// 選択肢2
nowStoryName = "choice2Story";
setTalk("aoi","まだJava演習終わってなかったんですか？",nowStoryName);
setTalk("shota","はい．．．Java演習終わってないです．",nowStoryName);

// 選択肢3
nowStoryName = "choice3Story";
setTalk("aoi","まだC演習終わってなかったんですか？",nowStoryName);
setTalk("shota","はい．．．C演習終わってないです．",nowStoryName);

// メインストーリー2
nowStoryName = "mainStory2";
setTalk("aoi","おかえりなさい",nowStoryName);
setTalk("shota","ただいま！！",nowStoryName);
