// セリフのテキストを取得
const speechBoxElem = document.getElementById("speechBox");

// セリフを表示
function writeSpeech(text){
    speechBoxElem.innerText = text;
}


//指定文字数まで文字を加算
function Loop(text,i,outText){
    if((i)<text.length){
        outText+=text.charAt(i);
        writeSpeech(outText);
        i++;
        setTimeout(() =>Loop(text,i,outText),45);
    }
}
// 引数の文字列を１文字づつ表示する
function showSpeech(text){
    /* 1文字づつtextに書き出すプログラム */
    let i=0;
    let outText="";
    Loop(text,i,outText);
}

// キャラクターを指定して文字表示
function talkChacac(character,text){
    showSpeech(`${character}「${text}」`);
}

/* キャラクター操作関係 */

// 要素を取得
const shota = document.getElementById("shota");
const rojin = document.getElementById("rojin");
const uranaishi = document.getElementById("uranaishi");
const aoi = document.getElementById("aoi");

// フォーカス時のキャラクターの画像
function getCharacterFocusImg(imageCode){
    return `/static/file/character/focus/${imageCode}.png`;
}

// フォーカスアウト時のキャラクターの画像
function getCharacterFocusOutImg(imageCode){
    return `/static/file/character/focusOut/${imageCode}.png`;
}

//  すべてのキャラクターをフォーカスアウト
function resetCharacter(){
    shota.src = getCharacterFocusOutImg("shota");
    rojin.src = getCharacterFocusOutImg("rojin");
    uranaishi.src = getCharacterFocusOutImg("uranaishi");
    aoi.src = getCharacterFocusOutImg("aoi");
}

hideAllCharacter(); // 初回起動時何も表示しない

//  すべてのキャラクターを非表示
function hideAllCharacter(){
    shota.style.display = 'none';
    rojin.style.display = 'none';
    uranaishi.style.display = 'none';
    aoi.style.display = 'none';
}

// idのキャラクターをフォーカス
function focusOn(id){
    showCharacter(id);
    resetCharacter();
    const character = document.getElementById(id);
    character.src = getCharacterFocusImg(id);
}

// idのキャラクターを非表示にする
function hideCharacter(id){
    const character = document.getElementById(id);
    character.style.display = 'none';
}

// idのキャラクターを表示する
function showCharacter(id){
    const character = document.getElementById(id);
    character.style.display = 'block';
    resetCharacter();
}