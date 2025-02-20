/* ストーリー設定 */

/*-----------------------編集-----------------------*/

// developMent();   // 開発者モードに切り替える（ページ遷移オフ）
// メインストーリー1
let nowStoryName = "mainStory1";
setBackImage("taki.jpg",nowStoryName);  // 画像を設定
setPlayBgm("hitoiki.m4a",nowStoryName);   // BGMを設定
setTalk("shota", "おお！ ついに箕面大滝に到着だな！", nowStoryName);
setTalk("aoi", "ええ、箕面大滝は大阪府箕面市にある、府営箕面公園内にある滝で、『日本の滝百選』にも選ばれているんですよ。", nowStoryName);
setTalk("shota", "え、百選！？ それって、超有名な滝ってこと？", nowStoryName);
setTalk("aoi", "そうです！ 落差は33メートルもあって、かなり迫力のある滝です。", nowStoryName);
setTalk("shota", "33メートル！？ それって、ビルの何階くらいだ？", nowStoryName);
setTalk("aoi", "だいたい10階くらいの高さですね。", nowStoryName);
setTalk("shota", "10階かー、結構な高さだな！ それじゃあ、滝の前に立ったら、めちゃくちゃ水しぶきかかりそう！", nowStoryName);
setTalk("aoi", "そうですね、でもそれがまた涼しくて気持ちいいんです。夏のクールスポットとしても人気ですから。", nowStoryName);
setTalk("shota", "涼しいかー。やっぱり夏に行くべきだったかもしれないけど、冬の滝もきっと神秘的だろうな。", nowStoryName);
setTalk("aoi", "確かに、冬の滝は雪化粧して、また違った美しさを見せてくれます。", nowStoryName);
setTalk("shota", "なるほど、四季折々で楽しめるってわけか。じゃあ、秋の紅葉もいいんじゃないか？", nowStoryName);
setTalk("aoi", "はい、秋には真っ赤な紅葉が滝と一緒に見られるんですよ。", nowStoryName);
setTalk("shota", "なんだよ！ この滝、四季ごとに美しさが違うのかよ！ まさに、どの季節に行っても楽しめるってわけだな！", nowStoryName);
setTalk("aoi", "その通りです。でも、気になるのは滝の名前ですね。『箕面』ってどういう意味だと思いますか？", nowStoryName);
setTalk("shota", "『箕面』かー、うーん、なんか聞いたことあるような……。もしかして、農具の『箕』に似てるから？", nowStoryName);
setTalk("aoi", "正解です！ 滝の流れが農具の『箕』に似ていることから、この名前がつけられたんですよ。", nowStoryName);
setTalk("shota", "へぇ〜、滝が農具の形に似てるって、ちょっと面白いな！ こういう歴史的な由来も、謎解きみたいでワクワクする！", nowStoryName);
setTalk("aoi", "確かに、こうした背景を知ると、滝の景色がもっと深く感じられますね。", nowStoryName);
setTalk("shota", "よし、じゃあ、滝の前に行って、思いっきり水しぶき浴びるぞ！", nowStoryName);
setTalk("aoi", "……翔太さん、まさか水に飛び込もうとしてませんよね？", nowStoryName);
setTalk("shota", "いやいや、滝の水を感じるだけさ！ でも、涼しそうだからちょっと入りたくなるな〜。", nowStoryName);
setTalk("aoi", "そこはグッとこらえてください。", nowStoryName);

setNarration("二人は古い紙を見つける", nowStoryName);

setTalk("shota", "うわっ！ なんだこれ！？ 井戸、竜、滝行の絵が描かれてる！ 古い紙だけど、かなり詳細だな。", nowStoryName);
setTalk("aoi", "これは……まさに何かの手がかりですね。でも、これだけじゃ意味がわからない。", nowStoryName);
setTalk("shota", "うーん、でも竜に井戸、滝行……何か、古代の儀式とか伝説に関わってる感じがするな。", nowStoryName);
setTalk("aoi", "その通りですね。では、この絵からどう読み解いていくべきかしら．．．", nowStoryName);
// 選択肢を設定
setChoice(2, "あなたの行動を選択して下さい", "魔法陣を書いて儀式をしてみる", "漢字で書いてみる", "Siriに聞いてみる");

// 選択肢1
nowStoryName = "choice1Story";
setTalk("shota", "よし、とりあえず魔法陣を描いて…", nowStoryName);
setTalk("aoi", "翔太さん、それ、一体何をしているんですか？", nowStoryName);
setTalk("shota", "魔法陣を書いてるんだ！、これを使えば謎が解けるはずだ！ 輪を描いて、次に矢印を…", nowStoryName);
setTalk("aoi", "翔太さん、『謎解き』ですよ、謎を解くんです。", nowStoryName);
setTalk("shota", "いや、だって『魔法陣』ってすごいし、きっとこれを使えば…", nowStoryName);
setTalk("aoi", "今は絵を描くんじゃなくて、頭を使いましょう。", nowStoryName);
setTalk("shota", "えー、でも魔法陣があれば、きっと何かヒントが…", nowStoryName);
setTalk("aoi", "翔太さん、魔法なんて存在しないんですよ。そんなことしている暇があったら、もっと他の方法を考えてください。", nowStoryName);
setTalk("shota", "うーん、確かに…でも、魔法陣を描くと気分が盛り上がるんだよなぁ。", nowStoryName);
setTalk("aoi", "それなら別の場所で気分転換してください！ ここでは謎解きに集中しましょう。さあ、もう一度紙を見てください。どうやら隠されたヒントがあるようです。", nowStoryName);
setTalk("shota", "うーん、分かったよ…。じゃあ、もう一度じっくり読んでみるか。", nowStoryName);
setTalk("aoi", "その方が賢明です。魔法陣よりも、きっとこっちの方が役に立つはずですから。", nowStoryName);
// 選択肢2
nowStoryName = "choice2Story";
setTalk("shota", "よし、葵！ 俺が漢字で書いてみるから、何かヒントがあるかもしれないぞ！", nowStoryName);
setTalk("aoi", "ええ、翔太さんが漢字で書くのですね。", nowStoryName);
setTalk("shota", "じゃあ、まず井戸！ これは『井』だな！ よし、次は竜だ！ 竜は…『龍』かな？ それとも、こっちの『竜』？", nowStoryName);
setTalk("aoi", "あ、翔太さん、それ『龍』ですよね？個人的には『竜』の方がカッコイイと思います。どちらかというと、ちょっと…おじいちゃんが使ってそうな漢字じゃないですか？", nowStoryName);
setTalk("shota", "え？ いや、これは立派な『龍』だろ！ 強くてカッコイイ！", nowStoryName);
setTalk("aoi", "確かに、強そうには見えますけど…でも、現代的にカッコイイのは『竜』の方じゃないですか？ なんか、スタイリッシュで若者向けって感じ。", nowStoryName);
setTalk("shota", "おいおい、俺の『龍』がダメだって言うのか？", nowStoryName);
setTalk("aoi", "いや、決してダメじゃないんですけど、例えば『竜』の方が、まるで映画のポスターに載ってる感じがしません？ 映画『竜の冒険』みたいな。", nowStoryName);
setTalk("shota", "えー、それにしても『龍』の方が伝説感あるだろ！ こう、山の中でひっそり眠ってる感じ。", nowStoryName);
setTalk("aoi", "それ、確かに伝説の竜だけど…どっちかというと『竜』は、今風のアクション映画に出てくる、フルスーツで飛び回る竜みたいな感じでカッコイイんですよ。", nowStoryName);
setTalk("shota", "…なるほどな。じゃあ、『竜』を使うか。まあ、今風の竜もいいかもしれないけど、俺の心の中ではまだ『龍』がイケてるんだ！", nowStoryName);
setTalk("aoi", "翔太さんのセンス、いつも面白いですね（笑）。でも、今回は『竜』でいきましょうよ、お願いですから。", nowStoryName);
setTalk("shota", "よし！ じゃあ、今回は…まあ、現代風に『竜』で決めるか！そういえば、何で俺がしゃべっただけで、漢字を想像できたんだ？", nowStoryName);
setTalk("aoi", "そういうメタい話はやめましょう。あくまで、フィクションですから。", nowStoryName);
setTalk("shota", "俺たち、フィクションなのか．．．", nowStoryName);
setTalk("aoi", "次は滝ですね。", nowStoryName);
setTalk("shota", "滝！ それはもちろん『滝』で決まりだ！ さあ、これで完成だ！ 井、竜、滝… どうだ！", nowStoryName);
setTalk("aoi", "翔太さん、それはただ漢字を書いただけですよ。何も変わりません。謎は解けていないですよ。", nowStoryName);
setTalk("shota", "いやいや、見てみろよ！ これで何かがひらめくんだ！", nowStoryName);
// 選択肢3
nowStoryName = "choice3Story";
setTalk("shota", "うーん、これはどういう意味だろう？ んー...そうだ！ Siriに聞いてみよう！", nowStoryName);
setTalk("aoi", "翔太さん、真剣に考えてるんですか？ そんなところでSiriに頼っても、答えてくれるわけないでしょう。", nowStoryName);
setTalk("shota", "だって、便利だし、もしかしたらヒントが出るかもって思ってさ。", nowStoryName);
setTalk("aoi", "まあ、たしかに今の時代、テクノロジーに頼るのも一つの手だけど、少しは自分で考えなさいよ。", nowStoryName);
setTalk("shota", "はは、そうだな。でも、少しでも手がかりが見つかるかもしれないからさ！", nowStoryName);
setTalk("aoi", "仕方ないわね…。でも、本当に大事なのは、この絵の中の詳細な部分だと思うから、もう少し深く観察してみましょう。", nowStoryName);
// メインストーリー2
nowStoryName = "mainStory2";


/*-----------------------end-----------------------*/

// 次のページ指定
setNextPage("");