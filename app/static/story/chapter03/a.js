/* ストーリー設定 */

/*-----------------------編集-----------------------*/

// developMent();   // 開発者モードに切り替える（ページ遷移オフ）
// メインストーリー1
let nowStoryName = "mainStory1";
setBackImage("wakayamajho.png",nowStoryName);  // 画像を設定
setPlayBgm("seiu.mp3",nowStoryName);   // BGMを設定

setTalk("shota", "よし、和歌山城に到着だ！ でも、ここってどんな城なんだろうな？", nowStoryName);
setTalk("aoi", "和歌山城は、和歌山県和歌山市にある日本の城なんですよ。元々は豊臣秀吉が弟の秀長に命じて、ここに築かせたんです。", nowStoryName);
setTalk("shota", "おお、秀吉が関わってるのか！ でも、なんかこの辺りの石垣、すごく独特だな。なんでこんなに緑っぽいんだ？", nowStoryName);
setTalk("aoi", "それは紀州特産の青石、つまり緑泥片岩が多く使われているからです。紀州ならではの特徴なんですね。", nowStoryName);
setTalk("shota", "なるほど、青石ね。確かに他の城とはちょっと違う雰囲気があるな。あ、見てみろ！ 天守閣からは和歌山市街が見渡せるんだな！ 紀ノ川もバッチリ見える！", nowStoryName);
setTalk("aoi", "天守閣からの眺めは本当に素晴らしいんです。和歌山市が一望できて、川の流れも落ち着いていて… まるでタイムスリップしたみたい。", nowStoryName);
setTalk("shota", "いやー、いい景色だ！ でも、和歌山城って、ただの観光地じゃないんだよな？ 何か面白いことがあったりするのか？", nowStoryName);
setTalk("aoi", "もちろんです！ 和歌山城公園には『おもてなし忍者』がいるんですよ。忍者が公園内に潜んで、観光のお手伝いをしてくれるんです。", nowStoryName);
setTalk("shota", "忍者！？ 本物の忍者か！？ それ、めちゃくちゃ面白そうじゃん！", nowStoryName);
setTalk("aoi", "実は、おもてなし忍者は月曜と火曜は忍者の里で修行をしているので、他の日に来ると会えるかもしれませんね。", nowStoryName);
setTalk("shota", "忍者が修行してるのか…それもすごいな！ でも、今日は月曜だし、もしかして修行中かな？", nowStoryName);
setTalk("aoi", "そうですね、もし修行していたら、修行している姿を見られるかもしれませんね。　 一度、忍者の里に行ってみますか？", nowStoryName);
setTalk("shota", "いいね！ でも、忍者は修行しているところを見られたら、恥ずかしがって逃げ出しそうだな！", nowStoryName);
setTalk("aoi", "翔太さん、それは違いますよ。忍者なら、修行がばれたら普通は攻撃に出ますよ。", nowStoryName);
setTalk("shota", "えっ、攻撃！？ そんな…こっちが悪者みたいじゃん！", nowStoryName);
setTalk("aoi", "だって、忍者ですからね。修行の姿を見られたら、相手に気づかれないように一瞬で仕留めるんですよ。", nowStoryName);
setTalk("shota", "えー、それ、かなり怖いな。じゃあ、忍者は『見られたら即攻撃』が基本なのか？", nowStoryName);
setTalk("aoi", "そうです。でも、翔太さんは…その素質がないから、忍者にはなれませんね。", nowStoryName);
setTalk("shota", "え、どういうこと！？ 俺だって忍者になれるだろ！", nowStoryName);
setTalk("aoi", "翔太さん、忍者に必要なのは、素早さと冷静さです。いざという時に、すぐに戦えるかどうか。翔太さん、焦ってすぐにバレそうですよ。", nowStoryName);
setTalk("shota", "うぅ、それは…確かに…。忍者に向いてる自信がなくなってきた。", nowStoryName);
setTalk("aoi", "それに、翔太さんが忍者になったら、どこでもドタバタ音を立ててバレそうですね。『あれ、なんか足音がうるさいな』って。", nowStoryName);
setTalk("shota", "…それ、絶対バレるやつじゃん！ もう無理だ、俺は忍者には向いてないな。", nowStoryName);

setPlaySe("seidenki.mp3",nowStoryName);
setNarration("葵が突然、後ろの気配に気づく", nowStoryName);

setTalk("aoi", "…ふっ、何か後ろに気配を感じますね。", nowStoryName);
setTalk("shota", "えっ、気配？ どこかに忍者でもいるのか？", nowStoryName);
setTalk("aoi", "静かに…こちらに近づいているのは…忍者か、それとも…", nowStoryName);

setNarration("葵が素早く振り向き、身構える", nowStoryName);

setTalk("aoi", "この一瞬で反応するのが、忍者の流儀です！", nowStoryName);
setTalk("shota", "うわっ！ す、すげー！ 忍者みたいな動き！", nowStoryName);

setNarration("振り向いた先には、ただの紙が置かれていた", nowStoryName);

setTalk("aoi", "…あれ？", nowStoryName);
setTalk("shota", "な、なんだよ！ それただの紙じゃん！", nowStoryName);
setTalk("aoi", "うーん、これはただの紙じゃありません。謎の書かれた紙です。", nowStoryName);
setTalk("shota", "え、そんなこと言っても、ただの紙だよ？ なんでそんなに真剣なんだ？", nowStoryName);
setTalk("aoi", "翔太さん、ただの紙だと思いますか？ この紙、どこかに秘密が隠されているかもしれません。忍者の目を持って、見逃してはならぬのです。", nowStoryName);
setTalk("shota", "えー、なんだよそれ…でも、まさか本当に何か書いてあるのか？", nowStoryName);
setTalk("aoi", "ちょっと見てみますね…", nowStoryName);
setShowTempImage("nazo03.png",nowStoryName);

// 選択肢を設定
setChoice(3, "あなたの行動を選択して下さい", "暗記パンを取り出す", "炎上しそうな発言をツイートする", "QRコードを読み込む","aoi");

// 選択肢1
nowStoryName = "choice1Story";
setTalk("aoi", "ふむ、これを解読するために、暗記パンを使いましょう。これで楽勝ですね", nowStoryName);
setTalk("shota", "あ、おい！ なにふざけてるんだよ、 暗記パンなんていま役に立つのかよ！", nowStoryName);
setTalk("aoi", "いや、だって、昔のマンガで見たことあるし、何か書いてあるの覚えられるんじゃないかと思って…", nowStoryName);
setTalk("shota", "そんなわけないだろ！ 今は紙を調べて、どういう秘密が隠されているのか探さないと！", nowStoryName);
setTalk("aoi", "...ええ、そうですね。真面目にやりましょう。", nowStoryName);
// 選択肢2
nowStoryName = "choice2Story";
setTalk("aoi", "ふふふ、これだ… QRコードに隠された謎、もうすぐ明らかになりますね！", nowStoryName);
setTalk("shota", "え、何か分かったのか？", nowStoryName);
setTalk("aoi", "いや、まだ分かりませんが、面白いことを考えついたんです！ QRコードの答えを見つける方法、炎上しそうな発言をツイートしたら何か分かるかも！", nowStoryName);
setTalk("shota", "えっ、それ…ちょっと待って！ 炎上しそうな発言って何だよ！？ そんなの絶対ダメだろ！", nowStoryName);
setTalk("aoi", "あら、翔太さん、心配しないでください。炎上したら、逆に注目を集められるんですよ。きっと何かヒントが得られるはず！", nowStoryName);
setTalk("shota", "いやいや、そんなツイートしたら、大炎上するに決まってるだろ！ 逆に問題を引き起こすだけだ！", nowStoryName);
setTalk("aoi", "でも、炎上したら逆に注目が集まって… QRコードの秘密を暴けるかもしれませんよ？ さあ、ちょっとだけ面白い発言をツイートしてみますね。", nowStoryName);
setTalk("shota", "ちょっと待って！ その『面白い発言』って、どんなのだよ？", nowStoryName);
setTalk("aoi", "例えば、『忍者の技はスマホでQRコードを読み取るよりも速い！お前のスマホは、まるでGIGAスクール構想で配られているタブレット端末より遅いみたいだな。さっさと時代について来い！』とか…どうですか？", nowStoryName);
setTalk("shota", "それ、どう考えても炎上案件だろ！ それでツイートしたら、コメント欄が戦場になるぞ！", nowStoryName);
setTalk("aoi", "ふふ、まさにそれが面白いんじゃないですか！ 焦った反応がまた新たなヒントに繋がるかも…", nowStoryName);
setTalk("shota", "絶対にやめてくれ！ それでQRコードの秘密が分かるなら、もっとスマートな方法で探そうぜ！", nowStoryName);
setTalk("aoi", "あ、分かりました。じゃあ、もう少し慎重に行きますか。でも、炎上したら面白かったのになー…", nowStoryName);
setTalk("shota", "その発想、絶対にやめてくれ！ 炎上してもツイートのコメントが謎解きに繋がらないって！", nowStoryName);
setTalk("aoi", "まあ、翔太さんがそんなに心配するなら、今回は普通にQRコードを解読しますか。忍者っぽく慎重に。", nowStoryName);
setTalk("shota", "うん、それが一番だ！ もう炎上はやめてくれよ！", nowStoryName);
setTalk("aoi", "わかりました。でも、どんな方法で解読しようかな…", nowStoryName);
// 選択肢3
nowStoryName = "choice3Story";
setTalk("aoi", "…ふむ、これはまさか、最新の忍者技術…QRコード！？", nowStoryName);
setTalk("shota", "えっ、忍者技術じゃなくて、ただのQRコードじゃん！", nowStoryName);
setTalk("aoi", "違いますよ、翔太さん。このQRコード、きっと次の謎への扉を開く鍵なんです！ 忍者もこうやって未来のテクノロジーを駆使しているに違いない。", nowStoryName);
setTalk("shota", "忍者がQRコード使ってるのか…時代が変わったな。", nowStoryName);

setNarration("葵はスマートフォンを取り出し、QRコードを読み取ろうとする", nowStoryName);

setTalk("aoi", "では、これをスキャンしてみますね…忍者の力を感じろ！", nowStoryName);
setTalk("shota", "え、そんなに大げさに…ただQRコード読み取るだけだろ？", nowStoryName);

setNarration("スマホがQRコードを読み取る", nowStoryName);

setTalk("aoi", "うーん…何か反応があるはず…！", nowStoryName);

setNarration("スマートフォンの画面には謎のメッセージが表示される。", nowStoryName);
setNarration("ここからは、画面の前のあなたが試してみてね！！", nowStoryName);

setTalk("shota", "画面の前のあなたって、誰だよ！", nowStoryName);
setTalk("aoi", "忍者なら、画面の向こう側にいる人の存在にも気が付くことができるんですね。", nowStoryName);
setTalk("shota", "まあ、忍者っぽいから、俺たちも任務みたいな感じで解読するか！", nowStoryName);
// メインストーリー2
nowStoryName = "mainStory2";
setPlayBgm("cryonicpulse.mp3",nowStoryName)
setHideCharacter("shota",nowStoryName);
setHideCharacter("aoi",nowStoryName);
setShowTempImage("07.png",nowStoryName);
setNarration("謎解きヒントシステムのQR読み取りシステムを使いましょう!!", nowStoryName);


/*-----------------------end-----------------------*/

// 次のページ指定
setNextPage("/play/nazo/chapter03/nazo");