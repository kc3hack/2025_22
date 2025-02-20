/* ストーリー設定 */

/*-----------------------編集-----------------------*/

// developMent();   // 開発者モードに切り替える（ページ遷移オフ）
// メインストーリー1
let nowStoryName = "mainStory1";
setPlayBgm("souryou.mp3",nowStoryName);   // BGMを設定
setBackImage("huruhonyaSoto.jpg",nowStoryName);  // 画像を設定
setNarration("翔太と葵は協力して「浪速の財」を探す冒険を始めることに決める。", nowStoryName);
setNarration("最初の手がかりを元に、大阪の名所を巡りながら謎を解いていく。", nowStoryName);

setTalk("shota", "最初の手がかりは、この古文書に書かれた言葉の通り、何かが『四つに分かれし』らしい。まずは、歴史のありそうな神社に行ってみるか？", nowStoryName);
// 選択肢を設定
setChoice(1, "あなたの行動を選択してください．", "神社に行く", "町の古い商店街を調べる", "街角の占い師に聞いてみる");

// 選択肢1
nowStoryName = "choice1Story";
setPlayBgm("hitoiki.m4a",nowStoryName);
setBackImage("jinja.jpg",nowStoryName);
setTalk("shota", "いや～、神社に行くのってなんかワクワクするよな！", nowStoryName);
setTalk("aoi", "そうですか？ 私はどちらかというと厳かな気持ちになりますけど……。", nowStoryName);
setTalk("shota", "だってさ、神社って『何かが封印されてる率』高くない？", nowStoryName);
setTalk("aoi", "そんな確率統計、どこで調べたんですか。", nowStoryName);
setTalk("shota", "俺のゲーム経験値から割り出した結果だな！", nowStoryName);
setTalk("aoi", "まったく信用できませんね。", nowStoryName);
setTalk("shota", "いやいや、例えばだぞ？ いきなり神社の奥から『ゴゴゴゴ……』って音がして、古の封印が解かれたり——", nowStoryName);
setPlaySe("konohagahukareru.mp3",nowStoryName);
setNarration("ヒュオオオオ……（突然、風が吹く）", nowStoryName);

setTalk("shota", "ほら来たぁぁぁぁ！！ 絶対なんかあるやつ！！！", nowStoryName);
setTalk("aoi", "ただの風です。", nowStoryName);
setPlaySe("konohagahukareru.mp3",nowStoryName);
setTalk("shota", "いや、これはフラグだって！！ 俺たち、今まさに運命の瞬間を——", nowStoryName);
setPlaySe("torigatobidatsu.mp3",nowStoryName);
setNarration("ピチュン！（鳥が飛び立つ）", nowStoryName);

setTalk("shota", "えっ、今の鳥！？ もしかして神の使い！？ 何かの啓示！？", nowStoryName);
setTalk("aoi", "普通に鳥です。", nowStoryName);
setTalk("shota", "……なんか俺だけすごい冒険してる気がする。", nowStoryName);
setTalk("aoi", "気のせいですね。", nowStoryName);
// 選択肢2
nowStoryName = "choice2Story";
setPlayBgm("hitoiki.m4a",nowStoryName);
setBackImage("shoutengai.jpg",nowStoryName);
setTalk("shota", "えっと……葵？ 俺さっき『まずは近くの神社に行ってみるか？』って言ったよな？", nowStoryName);
setTalk("aoi", "はい、仰っていましたね。", nowStoryName);
setTalk("shota", "なのに、なんで俺たち商店街にいるんだ……？", nowStoryName);
setTalk("aoi", "それはですね……神社も大事ですが、商店街も重要な手がかりが眠っている可能性があると思いまして。", nowStoryName);
setTalk("shota", "……つまり？", nowStoryName);
setTalk("aoi", "翔太さんが神社に行くと言っていた間に、私は商店街に行こうと決めました！", nowStoryName);
setTalk("shota", "うおおい！？ 完全に無視されてるじゃねーか！", nowStoryName);
setTalk("aoi", "無視なんてとんでもないです。むしろ、視野を広げた結果です！", nowStoryName);
setTalk("shota", "強引だな……まあいいか。で、何を調べるんだ？", nowStoryName);
setTalk("aoi", "この商店街、昔からあるお店が多いですから、古文書の『四つに分かれし』という手がかりに関連する伝承が残っているかもしれません。", nowStoryName);
setTalk("shota", "なるほどな。確かに、歴史のある場所なら何か掘り出し物があるかもな。", nowStoryName);
setTalk("aoi", "ええ。まずは、あちらの和菓子屋さんに行って、お話を伺ってみましょう。", nowStoryName);
setTalk("shota", "いや、和菓子を食べたいだけじゃないだろうな？", nowStoryName);
setTalk("aoi", "ふふ……バレてしまいましたか。ごめんなさい。でも途中で、和菓子をおごってくださいね。", nowStoryName);
setBackImage("huruhonyaSoto.jpg",nowStoryName); 
setPlayBgm("souryou.mp3",nowStoryName);
// 選択肢3
nowStoryName = "choice3Story";
setPlayBgm("dojinamajo.m4a",nowStoryName);
setBackImage("uranaiyaSoto.jpg",nowStoryName);
setTalk("aoi", "占い師に聞きますか。少し怪しいけど、ヒントが得られるかもしれないですね。", nowStoryName);
setTalk("shota", "占いかぁ、あんまり信じてないけど、たまにはやってみてもいいかもね！まさか、占い師が『宝の地図』を持ってるなんて…あり得ないよな？", nowStoryName);

setNarration("占い師は、街角にひっそりと座っている、少し古びたテントの中にいます。\nテントの外には「運命を知りたければ、ここで占ってみなさい！」と書かれた看板があります。", nowStoryName);

setTalk("aoi", "占い師…か、まあ、ヒントが得られるかもしれませんし、ちょっと試してみましょう。", nowStoryName);
setTalk("shota", "うーん、占いってどうなんだろうな…", nowStoryName);

// 占い師の登場
setBackImage("uranainoheya.png",nowStoryName);
setTalk("uranaishi", "ふむふむ…貴方たち、何かを探しているようじゃな？特に、”昔の財宝”についての探索をしておるようだが…", nowStoryName);
setTalk("aoi", "はい..!その通りです。!!『浪速の財』について調べているんです。どこに隠されているのか、知っているのですか？", nowStoryName);
setTalk("uranaishi", "ふむ…『浪速の財』か。そうじゃな、それについてはわしも少し知っとるが…。", nowStoryName);

setNarration("占い師が水晶玉を取り出し、まじないをかける", nowStoryName);
setTalk("uranaishi", "見える…見えるぞ…！おお、あそこだ…", nowStoryName);

setNarration("占い師が水晶玉に見入る", nowStoryName);
setTalk("aoi", "本当に見えているんですか？少し怪しいですね。あなたが言っていることが本当なら、化け物ですよ。", nowStoryName);
setTalk("uranaishi", "化け物だなんて…いくらなんでもひどすぎはしないかね。お嬢さん、ここからが占い師の本領発揮だというのに…", nowStoryName);

setNarration("数分後．．．", nowStoryName);

setTalk("uranaishi", "ふふふ…わかりましたよ。『浪速の財』は、今、あなた方がいるこの街の近くに隠されているのですよ…", nowStoryName);

setNarration("占い師が微笑みながら水晶玉を見つめる", nowStoryName);

setTalk("aoi", "え、近くに…具体的にどこですか？", nowStoryName);
setTalk("uranaishi", "それを見つけるのが…君らの仕事じゃ！", nowStoryName);
setTalk("shota", "それだけ！？全然わからないじゃないか！", nowStoryName);
setTalk("uranaishi", "それが占いの真髄というものじゃ。さて、もう行け。お前たちの“運命”を探しに。", nowStoryName);
setHideCharacter("shota",nowStoryName);
setHideCharacter("aoi",nowStoryName);


setNarration("翔太と葵は占い師の言葉に納得いかないながらも、占い師から教えられた「近く」の手がかりを頼りに調査を続ける。しかし…", nowStoryName);

setNarration("そのころ、占い師は．．．", nowStoryName);

setTalk("uranaishi", "フフフ…これで宝を独り占めできる…お前たちが動き出した瞬間、わしの計画通りだ。", nowStoryName);

setNarration("占い師が一人で水晶玉を取り出し、宝の場所を指し示しながらニヤニヤとほくそ笑む", nowStoryName);
setTalk("uranaishi", "さて、これからどうやって“浪速の財”を壊してやろうか…", nowStoryName);
setNarration("占い師がゆっくりとテントの中で準備を始める", nowStoryName);
setHideCharacter("uranaishi",nowStoryName);
setPlayBgm("souryou.mp3",nowStoryName);
setBackImage("huruhonyaSoto.jpg",nowStoryName); 

// メインストーリー2
nowStoryName = "mainStory2";


/*-----------------------end-----------------------*/

// 次のページ指定
setNextPage("");