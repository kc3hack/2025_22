// main(jsOriginal)

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
}

// ストーリー管理
const mainStory1 = new storySet(); // メインストーリー 1
const choice1Story = new storySet();    // 選択肢1ストーリー
const choice2Story = new storySet();    // 選択肢2ストーリー
const choice3Story = new storySet();    // 選択肢3ストーリー
const mainStory2 = new storySet(); // メインストーリー2

// ストーリーキー管理
const storyKey = {"mainStory":mainStory1,"choice1Story":choice1Story,"choice2Story":choice2Story,"choice3Story":choice3Story,"mainStory2":mainStory2};

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
    return storyKey[storyId].getStory();
}





// BGMを用意
const yoakeBGM = new Audio("/static/bgm/yoake.m4a");
yoakeBGM.volume = 0.5;  // 音量設定（0~1)
yoakeBGM.play();    // 再生開始
yoakeBGM.loop = true;   // ループ

// 会話内容
new dialog("aoi","どこに行くのですか？","mainStory");
new dialog("shota","大学に行ってくる!","mainStory");

function nextBtnClick(){
    const nowStory = getStory("mainStory");
    if(nowStory!=null){
        talkChacac(nowStory.getCharacterId(),nowStory.getWord());
        showBtn();
    }else{
        showChoice("あなたの行動を選んでください．","プログラミングする","Java演習する","C演習する");
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

nextBtnClick();


/* 次へボタンのイベント */
nextBtn.addEventListener("click",nextBtnClick);
/* 選択肢 */
choice1.addEventListener("click",next01);
choice2.addEventListener("click",next02);
choice3.addEventListener("click",next03);