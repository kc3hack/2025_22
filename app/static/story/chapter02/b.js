/* ストーリー設定 */

/*-----------------------編集-----------------------*/

// developMent();   // 開発者モードに切り替える（ページ遷移オフ）
// メインストーリー1
let nowStoryName = "mainStory1";
setBackImage("taki.jpg",nowStoryName);  // 画像を設定
setShowCharacter("shota",nowStoryName);
setShowCharacter("aoi",nowStoryName);
setPlayBgm("syuuennwokanaderumono.mp3",nowStoryName);  // BGMを設定
setPlaySe("kumonoue.mp3",nowStoryName);
setNarration("突然、謎の老人が現れる", nowStoryName);

setTalk("rojin", "ふむ…お前たち、次に行くべき場所は…和歌山城だ。", nowStoryName);

setTalk("shota", "え？ 和歌山城！？ なんで急にそんなことを？", nowStoryName);

setTalk("aoi", "え、和歌山城ですか？ それだけ？", nowStoryName);

setTalk("rojin", "うむ、それだけじゃ。何も言えぬ…行くがよい。", nowStoryName);

setNarration("老人がその場から消える", nowStoryName);

setHideCharacter("rojin",nowStoryName);

setTalk("shota", "待ってくれよ！ なんで和歌山城なんだよ！ 何かヒントもないのか？", nowStoryName);

setTalk("aoi", "まさか、ただ『和歌山城』って言いたかっただけってことはないですよね…？", nowStoryName);

setTalk("shota", "だとしても、謎の老人が言ってるんだし、行かないわけにはいかないよな。和歌山城か…。", nowStoryName);

setTalk("aoi", "不思議ですね。でも、和歌山城に何か秘密が隠されているのかもしれません。", nowStoryName);

setTalk("shota", "うーん、どうしても行かなきゃならない気がする…よし、行こうか！", nowStoryName);

setTalk("aoi", "何か待ち受けているのかもしれませんから、準備を整えて行きましょう。", nowStoryName);

setTalk("shota", "よし！ 和歌山城に向かうぞ！", nowStoryName);
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
setNextPage("/play/chapter03/a");