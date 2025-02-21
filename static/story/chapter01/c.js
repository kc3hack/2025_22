/* ストーリー設定 */

/*-----------------------編集-----------------------*/

// developMent();   // 開発者モードに切り替える（ページ遷移オフ）
// メインストーリー1
let nowStoryName = "mainStory1";
setBackImage("jinja.jpg",nowStoryName);  // 画像を設定
setPlayBgm("akisame.mp3",nowStoryName);   // BGMを設定
setShowCharacter("aoi",nowStoryName);
setShowCharacter("shota",nowStoryName);
setNarration("翔太と葵は、神社に到着した。", nowStoryName);

setTalk("shota", "さて、いよいよ大神神社に到着だな！ でも、なんでここに行こうと思ったんだ？", nowStoryName);
setTalk("aoi", "この神社は、日本最古の神社と言われているんですよ。場所は奈良県の桜井市三輪にあります。", nowStoryName);
setTalk("shota", "へえ、最古か！ それって、何かすごいことがあるんじゃないの？", nowStoryName);
setTalk("aoi", "もちろんです。この神社には大物主大神が祀られていて、国造りの神として有名です。", nowStoryName);
setTalk("shota", "国造りの神！？ それって、まさに『建国の神様』ってこと？", nowStoryName);
setTalk("aoi", "その通りです！ だから、国を守る神様として、昔からとても重要な存在なんです。", nowStoryName);
setTalk("shota", "なるほどな。国の神様かぁ……なんかすごい力がありそうだな。", nowStoryName);
setPlaySe("kigigayureru.mp3",nowStoryName);
setNarration("道の脇に立つ大木が揺れる", nowStoryName);

setTalk("shota", "おお！ あの木、神様が宿ってそうだな！", nowStoryName);
setTalk("aoi", "翔太さん、それはただの大きな木です。", nowStoryName);
setTalk("shota", "いやいや、こういうときに限って神様がいそうなんだよ！ まあ、大神神社って本殿がないんだよな？", nowStoryName);
setTalk("aoi", "はい、大神神社の最大の特徴は、本殿を持たず、三輪山そのものが御神体として崇拝されていることです。", nowStoryName);
setTalk("shota", "えっ、山が御神体！？ じゃあ、神社に行ったら山にお参りするってこと？", nowStoryName);
setTalk("aoi", "その通りです。三輪山自体が神様の象徴であり、神域として扱われているんですよ。", nowStoryName);
setTalk("shota", "なるほど、山自体が神様か！ それなら登るときは、軽くお辞儀してから登った方が良さそうだな。", nowStoryName);
setTalk("aoi", "そうですね、礼儀としては良いかもしれませんが、登るには受付を通す必要があります。", nowStoryName);
setTalk("shota", "うーん、今回は時間も惜しいし．．．。じゃあ、登らずに手を合わせるだけで神様の力を感じるってことにしよう。", nowStoryName);
setTalk("aoi", "はい、神社に参拝することで、生活全般の守護神として、様々なご加護をいただけると信じられています。", nowStoryName);
setTalk("shota", "守護神かぁ……まるで、全力で俺たちを守ってくれるみたいな感じだな！ ありがたや、ありがたや！", nowStoryName);
setTalk("aoi", "翔太さん、その感謝の気持ちを忘れずにお参りしてくださいね。", nowStoryName);
setTalk("shota", "もちろん！ でも、神様が守ってくれるなら、試験とかも楽勝かも！", nowStoryName);
setTalk("aoi", "それは神様に全てお願いするものではありませんよ。努力するからこそ、叶えてくださるわけでしてーーー", nowStoryName);

setTalk("shota", "あれは！！", nowStoryName);
setTalk("aoi", "はぁ．．．。聞いてないし．．．", nowStoryName);

setNarration("翔太は、境内にひっそりと佇む石碑を見つける。石碑には不思議な刻印が施されていた。", nowStoryName);

setTalk("aoi", "これ、見たことない刻印…。これも手がかりなのかしら？", nowStoryName);
setTalk("shota", "もしかしたら、この刻印が『四つに分かれし』に関連しているのかもしれない。もっと調べてみよう。", nowStoryName);
// 選択肢を設定
setChoice(1, "あなたの行動を選択して下さい", "刻印を詳しく調べる", "神社の住職に聞いてみる", "刻印の解読を試みる");

// 選択肢1
nowStoryName = "choice1Story";
setTalk("shota", "よし、この刻印を詳しく調べてみるか！", nowStoryName);
setTalk("aoi", "風化していますが、まだ読めそうですね。", nowStoryName);
setTalk("shota", "ふむふむ……この線の入り方……これは……。", nowStoryName);
setTalk("aoi", "何かわかりましたか？", nowStoryName);
setTalk("shota", "……オシャレな模様だな！", nowStoryName);
setTalk("aoi", "違いますよね？", nowStoryName);
setTalk("shota", "いやでも、見てみろよ！ なんかカッコいいし、Tシャツとかにプリントされてそうじゃない？", nowStoryName);
setTalk("aoi", "そんな軽いノリで刻印を解読しないでください。", nowStoryName);
setTalk("shota", "うーん、こういうときは手でなぞるとわかるかも！", nowStoryName);

setNarration("翔太は刻印を指でなぞってみた", nowStoryName);

setTalk("shota", "おお、ちょっとボコボコしてて——", nowStoryName);
setPlaySe("seidenki.mp3",nowStoryName);
setNarration("バチッ", nowStoryName); // 静電気の擬音

setTalk("shota", "いてっ！？ 静電気！？", nowStoryName);
setTalk("aoi", "まさか本当に何か力が……？", nowStoryName);
setTalk("shota", "いや、ごめん。たぶん冬の乾燥のせい。", nowStoryName);
setTalk("aoi", "……もう少し真面目に調べてください。", nowStoryName);
// 選択肢2
nowStoryName = "choice2Story";
setTalk("shota", "すみませーん！ 住職さん、ちょっとお聞きしたいことがあるんですけど！", nowStoryName);
setTalk("jushoku", "……おお、若いの。そんなに大きな声を出さなくても聞こえておるぞ。", nowStoryName);
setTalk("aoi", "申し訳ありません、翔太さんは少し声が大きいもので……。", nowStoryName);
setTalk("shota", "俺の元気さは長所だろ！ それはともかく、この石碑に刻まれていた『四つに分かれし力』について、何かご存じないですか？", nowStoryName);
setTalk("jushoku", "ふむ……その話か。確かに、この神社には古くから伝わる言い伝えがあるのう。", nowStoryName);
setTalk("shota", "おお！ じゃあ詳しく教えてください！", nowStoryName);
setTalk("jushoku", "よかろう……。昔々、この地には大いなる力を持つ artefact が——", nowStoryName);
setTalk("shota", "アルティメットファクト！？ つまり超レアアイテム！？", nowStoryName);
setTalk("jushoku", "artefact じゃ、アルティメットではない。『アーティファクト』、つまり遺物のことじゃ。", nowStoryName);
setTalk("aoi", "翔太さん、もう少し落ち着いてください……。", nowStoryName);
setTalk("shota", "あ、はい……すみません……。", nowStoryName);
setTalk("jushoku", "その artefact は四つに分かれ、それぞれが異なる場所に封じられたと言われておる。しかし、それがどこにあるかまでは……。", nowStoryName);
setTalk("shota", "なるほど……じゃあ、それを集めれば、すごいことが起こるってわけですね！？", nowStoryName);
setTalk("jushoku", "まあ、すごいことは起こるじゃろうな……良いことか悪いことかは別としてな。", nowStoryName);
setTalk("aoi", "つまり、慎重に行動しなければならないということですね。", nowStoryName);
setTalk("jushoku", "そういうことじゃ。無鉄砲な者が触れれば、思わぬ災いを招くこともある。", nowStoryName);
setTalk("shota", "なるほど、つまり俺は——", nowStoryName);
setTalk("aoi", "触らせませんよ。", nowStoryName);
setTalk("shota", "ええっ！？ まだ何も言ってないのに！", nowStoryName);
setTalk("jushoku", "うむ。おぬしは確実に触りたがる顔をしておる。", nowStoryName);
setTalk("shota", "住職さんまで！？", nowStoryName);
setTalk("aoi", "では、まずはその artefact の手がかりを集めましょう。住職様、ご協力ありがとうございました。", nowStoryName);
setTalk("jushoku", "うむ、気をつけるのじゃぞ。", nowStoryName);
// 選択肢3
nowStoryName = "choice3Story";
setTalk("shota", "よし……この石碑に刻まれた文字を解読してみるか……。", nowStoryName);
setTalk("aoi", "翔太さん、大丈夫ですか？ かなり風化していますが……。", nowStoryName);
setTalk("shota", "問題ない！ こういうのはな、集中してじーっと見つめれば、自然と意味が浮かんでくるんだ……。", nowStoryName);

setNarration("数分経過．．．", nowStoryName);

setTalk("shota", "……うーん。なんか、線がいっぱいあるな……。", nowStoryName);
setTalk("aoi", "はい、それは刻印ですからね。", nowStoryName);
setTalk("shota", "で、これは……えーっと……いや、これはマジでなんだ？", nowStoryName);
setTalk("aoi", "読めないんですね。", nowStoryName);
setTalk("shota", "ちょっと待て！ 俺だって必死に考えてるんだ！ えーっと……『大いなる……たぬき……繁栄せし時……』？", nowStoryName);
setTalk("aoi", "そんなこと書いてるわけないでしょう！", nowStoryName);
setTalk("shota", "いや、でも見てみろよ！ ほら、この部分、たぬきっぽくないか？", nowStoryName);
setTalk("aoi", "それはただの風化した模様です！", nowStoryName);
setTalk("shota", "ぐぬぬ……！ じゃあ葵、これが読めるのか？", nowStoryName);
setTalk("aoi", "ええ、見せてください……ふむふむ……。なるほど、わかりませんね。", nowStoryName);
setTalk("shota", "え...", nowStoryName);
// メインストーリー2
nowStoryName = "mainStory2";
setNarration("刻印を調べているうちに、翔太は不思議な模様が一部隠れていることに気づく。\nそれを掘り起こすと、そこには古い紙が現れた。", nowStoryName);

setTalk("shota", "この紙、漢字がたくさん書かれているな……。", nowStoryName);
setTalk("aoi", "この謎を解いて四角に入る文字を答えろ...ということですね", nowStoryName);

/*-----------------------end-----------------------*/

// 次のページ指定
setNextPage("/play/nazo/chapter01/nazo");