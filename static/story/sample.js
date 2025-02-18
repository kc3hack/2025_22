/* ストーリー設定 */

// developMent();   // 開発者モードに切り替える（ページ遷移オフ）

// メインストーリー1
let nowStoryName = "mainStory1";
setBackImage("taki.jpg",nowStoryName);
setPlayBgm("yoake.m4a",nowStoryName);
setShowCharacter("aoi",nowStoryName);
setShowCharacter("shota",nowStoryName);
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
