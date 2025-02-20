/* ストーリー設定 */

/*-----------------------編集-----------------------*/

// developMent();   // 開発者モードに切り替える（ページ遷移オフ）
// メインストーリー1
let nowStoryName = "mainStory1";
setBackImage("huruhonya.jpg",nowStoryName);  // 画像を設定
setPlayBgm("yoake.m4a",nowStoryName);   // BGMを設定        ##ここまだ！！！！！！！！！！
setNarration("大阪の静かな古本屋に足を踏み入れた葵は、店内の古びた本の並ぶ棚を眺めていた。", nowStoryName);
setNarration("取材のために関西の歴史資料を探していたが、ふと、一人の青年が手にしている本が目に留まった。", nowStoryName);
setNarration("分厚い紙に書かれた文字が、彼女の好奇心を刺激する。", nowStoryName);

setShowCharacter("aoi",nowStoryName);

setTalk("aoi", "それ、もしかして…『浪速の財』に関する古文書ですか？興味深いですね。", nowStoryName);

setNarration("青年は驚いたように顔を上げる。", nowStoryName);

setShowCharacter("shota",nowStoryName);

setTalk("shota", "君もこの文書に興味があるのか？実は、この文書には宝の手がかりが隠されているかもしれない。", nowStoryName);

setTalk("aoi", "宝？面白い。私は関西の歴史について取材しているんですが、この謎、解いてみたいな。一緒に協力しませんか？", nowStoryName);


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