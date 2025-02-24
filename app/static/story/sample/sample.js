/* ストーリー設定 */
// サンプルファイルです．

// developMent();   // 開発者モードに切り替える（ページ遷移オフ）

// メインストーリー1
let nowStoryName = "mainStory1";
setBackImage("jinja.jpg",nowStoryName);
setPlayBgm("yoake.m4a",nowStoryName);
setNarration("翔太と葵のとある１日．．．",nowStoryName);
setShowCharacter("aoi",nowStoryName);
setShowCharacter("shota",nowStoryName);
setTalk("aoi","わぁ、本当にシカがたくさん……かわいいですね！",nowStoryName);
setTalk("shota","でも、鹿せんべい持った瞬間からが本番やで",nowStoryName);




// 選択肢を設定
setChoice(1,"あなたの行動を選択してください．","落ち着いてお辞儀し、順番にあげる","驚いてせんべいを持ったまま逃げる","パニックになり、せんべいを投げる","aoi");

// 選択肢1
nowStoryName = "choice1Story"
setPlayBgm("seiu.mp3",nowStoryName);
setTalk("aoi","ええと……お辞儀をすれば……",nowStoryName);
setNarration("シカたちがペコリとお辞儀する",nowStoryName);
setTalk("aoi","すごい！では、順番にどうぞ♪",nowStoryName);
setNarration("シカたち、礼儀正しく受け取る",nowStoryName);
setTalk("shota","おぉ、シカマスターの素質あるで！",nowStoryName);

// 選択肢2
nowStoryName = "choice2Story";
setPlayBgm("sabitsuitasekai.mp3",nowStoryName);
setTalk("aoi","ちょ、ちょっと待ってください！？",nowStoryName);
setNarration("せんべいを持ったまま走り出す",nowStoryName);
setTalk("shota","はい．．．Java演習終わってないです．",nowStoryName);
setNarration("シカたち「待てぇぇぇ！！」と言わんばかりに追いかけてくる",nowStoryName);
setTalk("shota","言わんこっちゃない！",nowStoryName);
setBackImage("taki.jpg",nowStoryName);

// 選択肢3
nowStoryName = "choice3Story";
setBackImage("wakayamajho.png",nowStoryName);
setPlayBgm("souryou.mp3",nowStoryName);
setNarration("せんべい全投げ",nowStoryName);
setTalk("aoi","ひゃあぁ！？もうダメです！",nowStoryName);
setNarration("シカたちが猛ダッシュしてくる",nowStoryName);
setTalk("shota","撒き餌する人、初めて見たわ……",nowStoryName);
setTalk("aoi","はぁ……次こそ冷静に……！",nowStoryName);

// メインストーリー2
nowStoryName = "mainStory2";
setBackImage("shotengai.jpg",nowStoryName);
setPlayBgm("syuuennwokanaderumono.mp3",nowStoryName);
setTalk("aoi","このように、協力型のRPGゲームになっています。",nowStoryName);
setShowTempImage("04.png",nowStoryName);
setTalk("shota","続いて、謎解きのコーナーです。",nowStoryName);

// 次のページ指定
setNextPage("/play/nazo/sample/sampleNazo ");
