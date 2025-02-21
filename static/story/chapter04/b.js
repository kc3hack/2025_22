/* ストーリー設定 */

/*-----------------------編集-----------------------*/

// developMent();   // 開発者モードに切り替える（ページ遷移オフ）
// メインストーリー1
let nowStoryName = "mainStory1";
setBackImage("takedajho.png",nowStoryName);  // 画像を設定
  // BGMを設定
setShowCharacter("aoi",nowStoryName);
setShowCharacter("shota",nowStoryName);
setNarration("翔太と葵が竹田城跡で少し休憩していると、再び謎の老人が現れる",nowStoryName);
setPlayBgm("akaneironokazetotomoni.mp3",nowStoryName); 
setTalk("rojin", "お前ら、次に行くべき場所は…もうわかるだろ。", nowStoryName);
setTalk("shota", "知らねぇーよ！！", nowStoryName);
setTalk("aoi", "え、翔太さん、さすがにそれは…", nowStoryName);
setTalk("rojin", "な、なんだと！？ 今まで何をしてきたんだ、お前たち！", nowStoryName);
setTalk("shota", "え、いや、だって毎回急に現れて、次はどこだとか言われても…。ヒントはお前の言葉だけだろ？", nowStoryName);
setTalk("aoi", "翔太さん、そんなこと言っても…おじいさんもあんまり詳しく教えてくれないじゃないですか。", nowStoryName);
setTalk("rojin", "それはだな！ だが、そんなことを言ってる場合か！ ここまで来て、どこに行くかわからんのか！？", nowStoryName);
setTalk("shota", "わからねぇーよ！！、あと、何でそんなに怒ってるんだよ！", nowStoryName);
setTalk("rojin", "お前ら、4つのヒントすら覚えられんのか！？ そんな調子じゃ…今後、迷宮の中で迷子になっても知らんぞ！", nowStoryName);
setTalk("shota", "あ、すいません！ ちゃんと思い出しますから！", nowStoryName);
setTalk("rojin", "あの占い師、宝狙いよって…まぁ、あんなのがいるからこっちも面倒だ…まあ、いい！とにかくお前ら、早く行け！", nowStoryName);
setHideCharacter("rojin",nowStoryName);
setNarration("謎の老人が不満そうに消えていく");

setTalk("shota", "また勝手に消えやがって…まるで、ゲームのボスキャラが倒された瞬間に消えるみたいじゃん！ また、謎のヒントだけ残してってたよ！", nowStoryName);

setNarration("謎の老人が消えた後、翔太と葵は考え込みながら歩いている");

setTalk("shota", "えーっと、今までの答えは『巣（す）』、『ず』、『む』、『し』… これをつなげると…んー？『涼しむ寺』？", nowStoryName);
setTalk("aoi", "涼しむ寺？ それ、ただの涼しい場所を探してるみたいじゃないですか！ 翔太さん、それを組み合わせると、答えは．．．", nowStoryName);
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
setNextPage("/play/nazo/chapter04/nazo02");