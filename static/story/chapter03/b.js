/* ストーリー設定 */

/*-----------------------編集-----------------------*/

// developMent();   // 開発者モードに切り替える（ページ遷移オフ）
// メインストーリー1
let nowStoryName = "mainStory1";
setBackImage("wakayamajho.png",nowStoryName);   // 画像を設定
setPlayBgm("syuuennwokanaderumono.mp3",nowStoryName);  // BGMを設定
setNarration("葵と翔太が歩いていると、近くで占い師がウロウロしているのを見つける");
setShowCharacter("shota",nowStoryName);
setShowCharacter("aoi",nowStoryName);
setShowCharacter("uranaishi",nowStoryName);

setTalk("shota", "うーん…あれ、何だか不審な動きしてるな。占い師って感じがするけど…なんか怪しいな。", nowStoryName);
setTalk("aoi", "確かに、なんだか落ち着かない感じですね。でも、占い師ってちょっと不安定な雰囲気がありますし、まあ気にしなくても…", nowStoryName);
setHideCharacter("aoi",nowStoryName);
setHideCharacter("shota",nowStoryName);
setShowCharacter("rojin",nowStoryName);
setNarration("すると、突然謎の老人が現れ、占い師に向かって歩み寄る");

setTalk("rojin", "おい、あんた、何ウロウロしてるんだ？ 仕事しろ、早く帰れ。", nowStoryName);
setTalk("uranaishi", "えっ！？ ええと、私は今、未来を…", nowStoryName);
setTalk("rojin", "さっさと帰れ！ そんなことしてる暇があったら、次の場所に行く方が大事だ！", nowStoryName);

setTalk("shota", "お、おじいさん、何かすごいこと言ってる…", nowStoryName);
setTalk("aoi", "うーん…何か気になる発言ですね。でも、占い師もただ仕事してるだけなのに…", nowStoryName);

setHideCharacter("uranaishi",nowStoryName);
setNarration("謎の老人が占い師を無視して、翔太と葵に向かって話し始める");

setTalk("rojin", "お前ら、次に行くべき場所は『竹田城跡』だ。そこにはお前らが次に進むためのヒントがあるだろう。", nowStoryName);
setTalk("shota", "竹田城跡！？ どこだそれ？", nowStoryName);
setTalk("aoi", "あれ、竹田城跡って…あの有名な遺跡ですか？ どうしてその場所が？", nowStoryName);
setTalk("rojin", "知らないのか？ とにかく行け。ヒントがあるからな。詳しいことは自分で確かめろ。", nowStoryName);
setHideCharacter("rojin",nowStoryName);
setNarration("謎の老人が言い残すと、何も言わずに姿を消す");

setTalk("shota", "待って、どこ行った！？ もう、突然消えるなよ…", nowStoryName);
setTalk("aoi", "あれでヒントを得た気がするし、竹田城跡に行きますか。占い師も気になるけど、まずは目的地を…", nowStoryName);
setTalk("shota", "でもさっきの老人、占い師に何か言ってたけど…『仕事しろ』とか言ってるあたり、めちゃくちゃだな。", nowStoryName);
setTalk("aoi", "うーん、あの言い方だと、何か急いでいたのかもしれませんね。でも、竹田城跡には確かに行かなくては。", nowStoryName);
setTalk("shota", "よし、行こう！ 竹田城跡が次のステップだな！ ただ、占い師は気になるけど…まあ、気にせず行くしかないか！", nowStoryName);
setTalk("aoi", "その通りです。次に行くべきは竹田城跡、そこに新たな謎が待っているかもしれませんよ。", nowStoryName);
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
setNextPage("/play/chapter04/a");