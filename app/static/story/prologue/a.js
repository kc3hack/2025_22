/* ストーリー設定 */

/*-----------------------編集-----------------------*/

// developMent();   // 開発者モードに切り替える（ページ遷移オフ）
// メインストーリー1
let nowStoryName = "mainStory1";
setPlayBgm("yoake.m4a",nowStoryName);   // BGMを設定
setBackImage("sora.jpg",nowStoryName);  // 画像を設定
setNarration("関西の各地に隠された“秘宝”を巡る謎解きの旅。",nowStoryName);  // ナレーション
setNarration("関西に住む大学生・翔太(しょうた)と、関西圏外のライター・葵（あおい）は、偶然手にした古い日記をきっかけに、関西各地に隠された宝を探し始める。",nowStoryName);
setNarration("その宝とは、歴史の闇に埋もれた“ある宝もの”だった……。",nowStoryName);

// 選択肢を設定;


// 選択肢1
nowStoryName = "choice1Story";

// 選択肢2
nowStoryName = "choice2Story";

// 選択肢3
nowStoryName = "choice3Story";

// メインストーリー2
nowStoryName = "mainStory2";
setPlayBgm("cryonicpulse.mp3",nowStoryName);   // BGMを設定
setBackImage("sora.jpg",nowStoryName);  // 画像を設定
setNarration("このゲームは2人でプレイするRPGゲームです．",nowStoryName);  // ナレーション
setNarration("まず，どちらがどのプレイヤーでプレイするか決めてください．",nowStoryName);
setShowTempImage("01.png",nowStoryName);
setTalk("shota","翔太",nowStoryName);
setHideCharacter("shota",nowStoryName);
setTalk("aoi","葵",nowStoryName);
setHideCharacter("aoi",nowStoryName);
setNarration("この二人から選んでください．",nowStoryName);
setNarration("続いて，プレイするチーム名を決めてください．",nowStoryName);
setShowTempImage("02.png",nowStoryName);
setNarration("決まりましたか？",nowStoryName);
setNarration("続いては，謎解きコーナーの説明をします．",nowStoryName);
setShowTempImage("03.png",nowStoryName);
setNarration("謎解きコーナーではこのような画面に切り替わります．",nowStoryName);
setShowTempImage("05.png",nowStoryName);
setNarration("チャット欄を使って，二人で謎を解いていきましょう．",nowStoryName);
setShowTempImage("04.png",nowStoryName);
setNarration("「回答欄ボタンを表示する」から，回答をしてください．",nowStoryName);
setNarration("必ず2人で話し合って，答えをチャットで送りあって決めてから，2人とも回答をしてください．",nowStoryName);
setShowTempImage("04.png",nowStoryName);
setNarration("指定された箇所では，謎解きヒントツールも利用してみましょう．",nowStoryName);
setNarration("それでは，ゲームをお楽しみください！！",nowStoryName);


/*-----------------------end-----------------------*/

// 次のページ指定
setNextPage("/play/choseCharacter");