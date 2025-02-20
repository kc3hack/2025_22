/* ストーリー設定 */

/*-----------------------編集-----------------------*/

// developMent();   // 開発者モードに切り替える（ページ遷移オフ）
// メインストーリー1
let nowStoryName = "mainStory1";
setBackImage("takedajho.png",nowStoryName);  // 画像を設定
setPlayBgm("sabitsuitasekai.mp3",nowStoryName);   // BGMを設定
setPlaySe("kumonoue.mp3",nowStoryName);
setNarration("翔太と葵は竹田城跡に到着した");

setTalk("shota", "うーん、竹田城跡か…どんなところなんだろうな。", nowStoryName);

setTalk("aoi", "竹田城跡は、兵庫県朝来市にある山城跡で、実は『天空の城』として有名なんですよ。", nowStoryName);

setTalk("shota", "天空の城！？ それって…まさか、あの雲海に浮かぶような城のこと？", nowStoryName);

setTalk("aoi", "そうです！ 竹田城は、雲海に浮かぶ姿が本当に美しくて、まるで空に浮かぶ城のように見えるんです。", nowStoryName);

setTalk("shota", "すごいな！ それ、写真とかでよく見る風景だ。まさか、実際に見ることになるとは！", nowStoryName);

setTalk("aoi", "建物自体は残っていませんが、当時の石垣はそのままの形で残っていて、昔の城の雰囲気を感じることができます。", nowStoryName);

setTalk("shota", "ああ、石垣か…やっぱり城って言ったら、石垣のイメージだよな。しっかり残ってるんだ！", nowStoryName);

setTalk("aoi", "そうですね。竹田城は1443年頃、但馬守護の山名宗全が配下の太田垣氏に命じて築かせたんです。", nowStoryName);

setTalk("shota", "ふーん、でもその後どうなったんだ？", nowStoryName);

setTalk("aoi", "実は、竹田城は羽柴秀吉（後の豊臣秀吉）による但馬攻めで落城したと言われています。これによって、竹田城も滅び、太田垣氏も没落したんです。", nowStoryName);

setTalk("shota", "なんだ、結局は秀吉にやられたのか。天下統一のために、どんどん城を落としていったんだな…", nowStoryName);

setTalk("aoi", "そうですね。でも、それが歴史の一部であり、今となってはその美しい姿が多くの人に愛されています。", nowStoryName);

setTalk("shota", "うーん、なんだかロマンがあるな。壮大な歴史を感じる場所だね。でも、せっかく来たからには、ちょっとした謎でも見つけられるといいな！", nowStoryName);

setTalk("aoi", "もちろん！ この竹田城跡にもきっと隠されたヒントがあるはず。慎重に、そして楽しんで行きましょう！", nowStoryName);
// 選択肢を設定
setChoice(1, "あなたの行動を選択して下さい", "辺りを隈なく探す", "大地を感じる", "バルス！…じゃなくて、『天空のドカーン！』と言う");

// 選択肢1
nowStoryName = "choice1Story";
setNarration("葵は周囲を注意深く調査しながら歩く。すると、古びた石碑を発見した。");

setTalk("aoi", "翔太さん、これを見てください。石碑みたいですが、かなり古いものですね。", nowStoryName);
setTalk("shota", "うわ、本当だ！ こんな場所にこんなものがあったなんて…何が書かれてるんだ？", nowStoryName);

setNarration("石碑には、風化して読みづらくなった文字が刻まれていたが、かろうじていくつかの文字を判読できた。");

setTalk("aoi", "これは…暗号のようですね。何か意味がありそうです。", nowStoryName);
setTalk("shota", "やった！ ついに手がかりを見つけたかも！ どんな謎が隠されてるんだろう？", nowStoryName);
setTalk("aoi", "まずは解読してみましょう。もしかしたら、何か重要な情報が隠されているかもしれません。", nowStoryName);
setTalk("shota", "よし、やってみよう！", nowStoryName);
// 選択肢2
nowStoryName = "choice2Story";
setNarration("葵がふと地面に手をつき、ゆっくりと寝転がる");

setTalk("aoi", "ふむ…この大地…歴史の鼓動を感じますね…。この石垣も、大地の一部…。まるで、戦国の時代に包まれるような…zzz…", nowStoryName);
setTalk("shota", "おいおいおい、寝るなーーー！！！", nowStoryName);

setNarration("翔太が慌てて葵を揺さぶる");

setTalk("shota", "なに大地と一体化しようとしてんだよ！ ここ、竹田城だぞ！？ 戦国の浪漫感じるのはいいけど、今すぐ寝るな！", nowStoryName);
setTalk("aoi", "…んん？ あれ？ もう戦国時代終わりました？", nowStoryName);
setTalk("shota", "何百年も前に終わってるわ！！", nowStoryName);
setTalk("aoi", "そっかぁ…せっかくなら、もう少し歴史の一部として眠っていたかったんですけど…。", nowStoryName);
setTalk("shota", "いやいや、そんなこと言ってる場合じゃないだろ！ ちゃんと歩いて謎を探せよ！", nowStoryName);
setTalk("aoi", "ふふ、冗談ですよ。さあ、行きましょうか。", nowStoryName);
setTalk("shota", "まったく…マイペースすぎるんだよなぁ…！", nowStoryName);
// 選択肢3
nowStoryName = "choice3Story";
setTalk("aoi", "天空の城だし、バルス！…じゃなくて、うーん、もっとこう…『天空のドカーン！』みたいな感じでどうかしら？これで、謎のヒントが見つかるかも？", nowStoryName);
setTalk("shota", "え…『ドカーン』って、どうしてそんな音が出てきたんだ！？ もう少し荘厳な感じにしない？あまりにも場違いじゃないか？", nowStoryName);
setTalk("aoi", "だって、雲海に浮かぶ城だし、なんか派手に行きたくて！『天空のドカーン！』でどうかしら！", nowStoryName);
setTalk("shota", "いや、それじゃあ『天空の城』が爆発するみたいだろ…むしろ、守ってくださいって感じだよ。", nowStoryName);
setTalk("aoi", "あ、そうなの…じゃあ、『天空のバリバリ！』とかどう？", nowStoryName);
setTalk("shota", "…いや、それはそれで微妙に違う気がするけど、まあ…葵が楽しければいいけどな。", nowStoryName);
setTalk("aoi", "よし、じゃあ次は『天空のドドーン！』で行くわよ！", nowStoryName);
setTalk("shota", "もう何でもいいけど、少し落ち着こうな…", nowStoryName);
// メインストーリー2
nowStoryName = "mainStory2";


/*-----------------------end-----------------------*/

// 次のページ指定
setNextPage("");