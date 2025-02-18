// セリフのテキストを取得
const speechBoxElem = document.getElementById("message");

// セリフを表示
function writeSpeech(text){
    hideChoise();
    speechBoxElem.style.display = 'block';
    speechBoxElem.innerText = text;
}


//指定文字数まで文字を加算
function Loop(text,i,outText){
    if((i)<text.length){
        outText+=text.charAt(i);
        writeSpeech(outText);
        i++;
        setTimeout(() =>Loop(text,i,outText),45);
    }else{
        showBtn();
    }
}
// 引数の文字列を１文字づつ表示する
function showSpeech(text){
    hideBtn();
    /* 1文字づつtextに書き出すプログラム */
    const audioElem = new Audio("/static/se/moji.mp3");
    audioElem.play();
    let i=0;
    let outText="";
    Loop(text,i,outText);
}

const characterSet = {
    "shota":"翔太",
    "rojin":"謎の老人",
    "uranaishi":"占い師",
    "aoi":"葵",
    "narration":false,
    "playSe":"playSe",
    "playBgm":"playBgm",
    "showCharacter":"showCharacter",
    "hideCharacter":"hideCharacter",
    "chengeBackImg":"chengeBackImg",
    "showTempImage":"showTempImage",
    "hideTempImage":"hideTempImage"
};

// キャラクターを指定して文字表示
function talkCharacter(id,text){
    if(characterSet[id]!=false){
        showSpeech(`${characterSet[id]}「${text}」`);
        focusOn(id);
    }else{
        resetCharacter();
        showSpeech(text);
    }
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


// 選択肢の要素を取得
const message = document.getElementById("message");
const choice1 = document.getElementById("choice1");
const choice2 = document.getElementById("choice2");
const choice3 = document.getElementById("choice3");

// 選択肢がクリックされたときに音を鳴らす
choice1.addEventListener("click",playTapSE);
choice2.addEventListener("click",playTapSE);
choice3.addEventListener("click",playTapSE);

// 選択肢を表示する
function showChoice(mes,text01,text02,text03){
    hideBtn();
    hideChoise();
    resetCharacter();
    message.innerText = mes;
    message.style.display = 'block';
    setTimeout(()=>{
        choice1.innerText = `▶ ${text01}`;
        choice1.style.display = 'block';
        setTimeout(()=>{
            choice2.innerText = `▶ ${text02}`;
            choice2.style.display = 'block';
            setTimeout(()=>{
                choice3.innerText = `▶ ${text03}`;
                choice3.style.display = 'block';
            },500);
        },500);
    },500); 
}

// 選択肢を非表示にする
function hideChoise(){
    message.style.display = 'none';
    choice1.style.display = 'none';
    choice2.style.display = 'none';
    choice3.style.display = 'none';
}


// 次へボタン
const nextBtn = document.getElementById("nextBtn");

// 次へボタンを表示
function showBtn(){
    nextBtn.style.display = 'block';
}

//次へボタンを非表示
function hideBtn(){
    nextBtn.style.display = 'none';
}

/* 次へボタンのイベント */
//nextBtn.addEventListener("click",nextBtnClick);





// ストーリーデータクラス
class storySet{
    constructor(){
        this.storyData = [];
        this.StoryNum = 0;
    }
    // 現在のストーリーを取得
    getStory(){
        if(this.StoryNum<this.storyData.length){
            const newStory = this.storyData[this.StoryNum];
            this.StoryNum++;
            return newStory;
        }else{
            return null;
        }
    }
    // ストーリーを設定
    setStories(story){
        this.storyData.push(story);
    }
    // 残りのストーリーナンバーを取得
    getRestStoryNumber(){
        return this.storyData.length-this.StoryNum;
    }
    // リセットストーリーナンバー
    resertStoryNum(){
        this.StoryNum = 0;
    }
    // ストーリー状況
    getStoryStatus(){
        return this.StoryNum<this.storyData.length ? true:false;
    }
}

// ストーリー管理
const mainStory1 = new storySet(); // メインストーリー 1
const choice1Story = new storySet();    // 選択肢1ストーリー
const choice2Story = new storySet();    // 選択肢2ストーリー
const choice3Story = new storySet();    // 選択肢3ストーリー
const mainStory2 = new storySet(); // メインストーリー2

// ストーリーキー管理
const storyKey = {
    "mainStory1":mainStory1,
    "choice1Story":choice1Story,
    "choice2Story":choice2Story,"choice3Story":choice3Story,
    "mainStory2":mainStory2
};

// 会話クラス
class dialog{
    // コンストラクタ（キャラクターid,文章,保存場所）
    constructor(characterId,word,storyId){
        this.characterId = characterId;
        this.word = word;
        if(storyKey[storyId]==undefined){
            return null;
        }else{
            storyKey[storyId].setStories(this);
        }
    }
    // キャラクターId取得
    getCharacterId(){
        return this.characterId;
    }
    // 文章取得
    getWord(){
        return this.word;
    }
}

// ストーリーを取得(.getCharacterId:.getWord)
function getStory(storyId){
    if(storyKey[storyId]==undefined){
        console.error("The storyId is incorrect.");
        return null;
    }else{
        return storyKey[storyId].getStory();
    }
}

// 分岐管理(使用できるか)
let choiceStatus = false;
// 選択肢の使用状況
function getChoiceStatus(){
    return choiceStatus;
}
// 選択肢のループを解除
function cancelChoise(){
    choiceStatus = false;
}

// ストーリーの次の状態を取得
function getStoryNextStatus(storyId){
    if(storyKey[storyId]==undefined){
        console.error("The storyId is incorrect.");
        return null;
    }else{
        return storyKey[storyId].getRestStoryNumber();
    }
}

// ストーリーを最初からにリセット
function resetStory(storyId){
    if(storyKey[storyId]==undefined){
        console.error("The storyId is incorrect.");
        return null;
    }else{
        return storyKey[storyId].resertStoryNum();
    }
}

// ストーリーを状態を取得
function getStoryStatus(storyId){
    if(storyKey[storyId]==undefined){
        console.error("The storyId is incorrect.");
        return null;
    }else{
        return storyKey[storyId].getStoryStatus();
    }
}


/* 背景関連 */
const backImg = document.getElementById("backImg");
// 背景を変更
function chengeBackImg(fileName){
    backImg.src = `/static/file/backImg/${fileName}`;
}


/* 選択システム関係 */

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

// 選ばれている番号を記録
let selectNum;
// 正しい選択肢
let okNum;

// チョイス変数
let choiceMes;  // 選択肢のメッセージ
let choiceText = [];    // 選択肢

// 正しい選択肢
function setNextChoice(num){
    okNum = num;
}


// 選択肢1が選択された
function next01(){
    selectNum = 1;
    next();
}

// 選択肢2が選択された
function next02(){
    selectNum = 2;
    next();
}

// 選択肢3が選択された
function next03(){
    selectNum = 3
    next();
}

// 選択肢をセット(選択番号，メッセージ，選択肢1,選択肢2,選択肢3)
function setChoice(choiceNum,mes,choice01,choice02,choice03){
    okNum = choiceNum;
    choiceMes = mes;
    choiceText[0] = choice01;
    choiceText[1] = choice02;
    choiceText[2] = choice03;
    choiceStatus = true;
}