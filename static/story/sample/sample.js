/* ストーリー設定 */
// サンプルファイルです．

// developMent();   // 開発者モードに切り替える（ページ遷移オフ）

// メインストーリー1
let nowStoryName = "mainStory1";
setBackImage("taki.jpg",nowStoryName);
setPlayBgm("yoake.m4a",nowStoryName);
setShowCharacter("aoi",nowStoryName);
setShowCharacter("shota",nowStoryName);
setNarration("翔太と葵のとある１日．．．",nowStoryName);
setTalk("shota","画像を表示します．",nowStoryName);
setShowTempImage("paper.png",nowStoryName);
setBackImage("yuhi.jpg",nowStoryName);
setTalk("aoi","どこに行くのですか？",nowStoryName);
setTalk("shota","大学に行ってくる!",nowStoryName);
setHideTempImage(nowStoryName);
setTalk("aoi","画面を非表示にしました．",nowStoryName);
setNarration("なぜだか，謎の老人と占い師もやってきました．",nowStoryName);
setShowCharacter("rojin",nowStoryName);
setShowCharacter("uranaishi",nowStoryName);
setPlayBgm("hitoiki.m4a",nowStoryName);
setTalk("rojin","それはおいしいのかね？",nowStoryName);
setTalk("uranaishi","何を言ってるんじゃ？",nowStoryName);
setNarration("二人はさっていった",nowStoryName);
setHideCharacter("uranaishi",nowStoryName);
setHideCharacter("rojin",nowStoryName);
setNarration("住職が現れた",nowStoryName);
setShowCharacter("jushoku",nowStoryName);
setTalk("jushoku","まったく，あの二人は...",nowStoryName);
setTalk("aoi","あの，あなた誰です？",nowStoryName);
setHideCharacter("jushoku",nowStoryName);
setBackImage("uranainoheya.png",nowStoryName);


// 選択肢を設定
setChoice(1,"あなたの行動を選択してください．","プログラムの勉強をする","Java演習をする","C演習をする");

// 選択肢1
nowStoryName = "choice1Story"
setPlayBgm("seiu.mp3",nowStoryName);
setTalk("aoi","勉強熱心ですね！！",nowStoryName);
setTalk("shota","それほどでもないよ",nowStoryName);

// 選択肢2
nowStoryName = "choice2Story";
setPlayBgm("sabitsuitasekai.mp3",nowStoryName);
setTalk("aoi","まだJava演習終わってなかったんですか？",nowStoryName);
setTalk("shota","はい．．．Java演習終わってないです．",nowStoryName);

// 選択肢3
nowStoryName = "choice3Story";
setPlayBgm("souryou.mp3",nowStoryName);
setTalk("aoi","まだC演習終わってなかったんですか？",nowStoryName);
setTalk("shota","はい．．．C演習終わってないです．",nowStoryName);

// メインストーリー2
nowStoryName = "mainStory2";
setPlayBgm("syuuennwokanaderumono.mp3",nowStoryName);
setTalk("aoi","おかえりなさい",nowStoryName);
setTalk("shota","ただいま！！",nowStoryName);

// 次のページ指定
setNextPage("/play/nazo/sample/sampleNazo ");
