// 開発者モードに切り替える
function developMent(){
    debug = true;
}

// ナレーションを設定：（本文，ストーリーID）
function setNarration(text,storyId){
    if(storyIdStatus(storyId)){
        new dialog("narration",text,storyId);
    }
}

// 会話を設定：（キャラクターID,会話文，ストーリーID）
function setTalk(characId,text,storyId){
    if(characterIdStatus(characId)&&storyIdStatus(storyId)){
        new dialog(characId,text,storyId);
    }else{
        console.error("setTalk:指定されたキャラクターIDまたはストーリーidが存在しません．");
    }
}

// キャラクターを表示に設定：（キャラクターID,ストーリーID）
function setShowCharacter(characId,storyId){
    if(characterIdStatus(characId)&&storyIdStatus(storyId)){
        new dialog("showCharacter",characId,storyId);
    }else{
        console.error("setShowCharacter:指定されたキャラクターIDまたはストーリーidが存在しません．");
    }
}

// キャラクターを非表示に設定：（キャラクターID,ストーリーID）
function setHideCharacter(characId,storyId){
    if(characterIdStatus(characId)&&storyIdStatus(storyId)){
        new dialog("hideCharacter",characId,storyId);
    }else{
        console.error("setHideCharacter:指定されたキャラクターIDまたはストーリーidが存在しません．");
    }
}

// BGMを設定：（ファイル名，ストーリーID）
function setPlayBgm(fileName,storyId){
    if(storyIdStatus(storyId)){
        new dialog("playBgm",fileName,storyId);
    }else{
        console.error("setPlayBgm:指定されたストーリーIDは存在しません．");
    }
}

// SEを設定：（ファイル名，ストーリーID）
function setPlaySe(fileName,storyId){
    if(storyIdStatus(storyId)){
        new dialog("playSe",fileName,storyId);
    }else{
        console.error("setPlaySe:指定されたストーリーIDは存在しません．");
    }
}   

// 背景を設定：（ファイル名，ストーリーID）
function setBackImage(imageName,storyId){
    if(storyIdStatus(storyId)){
        new dialog("chengeBackImg",imageName,storyId);
    }else{
        console.error("setBackImage:指定されたストーリーIDは存在しません．");
    }
}