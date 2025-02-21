/* ストーリー設定 */
// サンプルファイルです．

// developMent();   // 開発者モードに切り替える（ページ遷移オフ）

// メインストーリー1
let nowStoryName = "mainStory1";
setBackImage("jinja.jpg",nowStoryName);
setPlayBgm("yoake.m4a",nowStoryName);
setNarration("翔太と葵のとある１日．．．",nowStoryName);



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
setBackImage("taki.jpg",nowStoryName);

// 選択肢3
nowStoryName = "choice3Story";
setBackImage("wakayamajho.png",nowStoryName);
setPlayBgm("souryou.mp3",nowStoryName);
setTalk("aoi","まだC演習終わってなかったんですか？",nowStoryName);
setTalk("shota","はい．．．C演習終わってないです．",nowStoryName);
setBackImage("shotengai.jpg",nowStoryName);

// メインストーリー2
nowStoryName = "mainStory2";
setPlayBgm("syuuennwokanaderumono.mp3",nowStoryName);
setTalk("aoi","おかえりなさい",nowStoryName);
setTalk("shota","ただいま！！",nowStoryName);

// 次のページ指定
setNextPage("/play/nazo/sample/sampleNazo ");
