/* ストーリー設定 */

/*-----------------------編集-----------------------*/

// developMent();   // 開発者モードに切り替える（ページ遷移オフ）
// メインストーリー1
let nowStoryName = "mainStory1";
setBackImage("takedajho.png",nowStoryName);  // 画像を設定
setPlayBgm("yoake.m4a",nowStoryName);   // BGMを設定
setTalk("aoi", "答えは．．．『鈴虫』ですよ、鈴虫寺！", nowStoryName);
setTalk("shota", "鈴虫？ なんだそれ、鈴虫って…あ、もしかして、あっ、そっか、鈴虫寺か！ わかっちゃった！", nowStoryName);
setTalk("aoi", "やっと気づきましたか…。実は私は最初からそう言いたかったんですけど。", nowStoryName);
setTalk("shota", "よし、間違えたけど、やっと辿り着いた！『涼しむ寺』はちょっと違ったね…", nowStoryName);
setTalk("aoi", "だいぶ脱線しましたけど、無事に答えに辿り着いてよかったですね。次こそ間違えないでくださいね！", nowStoryName);
setTalk("shota", "ああ、次は絶対に間違えないように気をつけるよ！", nowStoryName);
setTalk("aoi", "まあ、鈴虫寺に行けば、涼しい気持ちになれるかもしれませんね。涼しむ寺の代わりに。", nowStoryName);
setTalk("shota", "それで涼しくなるなら、涼しむ寺でもいいかな〜。あ、でも鈴虫寺だよね！", nowStoryName);
setTalk("aoi", "とりあえず鈴虫寺に行ってみますか。どうせ次の謎が待ってるんでしょうし。", nowStoryName);
setTalk("shota", "よし、鈴虫寺だな！ とりあえず自分たちの答えを信じて行こう！", nowStoryName);
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
setNextPage("");