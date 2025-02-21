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


/*-----------------------end-----------------------*/

// 次のページ指定
setNextPage("/play/choseCharacter");