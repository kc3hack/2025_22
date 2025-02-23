/* ストーリー設定 */

/*-----------------------編集-----------------------*/

// developMent();   // 開発者モードに切り替える（ページ遷移オフ）
// メインストーリー1
let nowStoryName = "mainStory1";
setBackImage("jinja.jpg",nowStoryName);  // 画像を設定
setPlaySe("kazeniyureru.mp3",nowStoryName);
setTalk("shota", "おっ！？ なんだ、急に風が……", nowStoryName);
setTalk("aoi", "これは……まさか、何かの予兆か？", nowStoryName);
setNarration("その時、木の陰から謎の老人がゆっくりと現れる", nowStoryName);
setPlayBgm("syuuennwokanaderumono.mp3",nowStoryName);
setTalk("rojin", "ふむ、これは……若者たち、運命に導かれし者よ。", nowStoryName);
setTalk("shota", "えっ！？ ど、どこから……？", nowStoryName);
setTalk("aoi", "あの……あなたは一体？", nowStoryName);

setNarration("老人は目を細め、意味深な微笑を浮かべる", nowStoryName);

setTalk("rojin", "お主たちが求めておるものは、いずれ見つかる。しかし、次に向かうべき場所がある。", nowStoryName);
setTalk("shota", "えっ、どこですか！？ すぐにでも行くぞ！", nowStoryName);
setTalk("rojin", "次に向かうべきは……『箕面大滝』。", nowStoryName);
setTalk("aoi", "箕面大滝ですか？", nowStoryName);
setTalk("rojin", "その地で、何かを感じるだろう。", nowStoryName);

setNarration("老人は言い残して、ふわりと風に乗って消えていく", nowStoryName);
setHideCharacter("rojin",nowStoryName);
setPlayBgm("yoake.m4a",nowStoryName);
setTalk("shota", "ちょ、ちょっと待って！ なんで急に消えるんだ！？", nowStoryName);
setTalk("aoi", "……一体、何だったのでしょう。", nowStoryName);
setTalk("shota", "でも、言ってたことは覚えておこう。次は『箕面大滝』だ！", nowStoryName);
setTalk("aoi", "確かに。ただ、なぜその場所が重要なのか、もう少し考える必要がありますね。", nowStoryName);
setTalk("shota", "まぁ、でも謎の老人が言うことには間違いない……のかもしれないしな！", nowStoryName);
setTalk("aoi", "慎重に行動しましょう。さっそく、箕面大滝を目指してみましょう。", nowStoryName);
// 選択肢を設定


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
setNextPage("/play/chapter02/a");