/* ストーリー設定 */

/*-----------------------編集-----------------------*/

// developMent();   // 開発者モードに切り替える（ページ遷移オフ）
// メインストーリー1
let nowStoryName = "mainStory1";
setBackImage("huruhonya.jpg",nowStoryName);  // 画像を設定
setPlayBgm("yoake.m4a",nowStoryName);   // BGMを設定
setNarration("あなたは大阪の静かな古本屋に足を踏み入れる。", nowStoryName);
setNarration("埃っぽい棚の中から一冊の古びた本を見つける。", nowStoryName);
setNarration("手に取ると、厚い紙に「浪速の財、四つに分かれし」と書かれている。", nowStoryName);

setShowCharacter("shota",nowStoryName);
setTalk("shota", "この文字…江戸時代の文書か。何か大きな秘密が隠されているのかもしれない…。", nowStoryName);

setNarration("その瞬間、店のドアが開き、誰かが入ってきた。", nowStoryName);
setNarration("入ってきたのは、関西に関する取材をしているジャーナリストの葵だった。", nowStoryName);
setNarration("彼女はあなたの手にした古文書を見て、興味深そうに近づいてくる。", nowStoryName);

setTalk("aoi", "それ、もしかして…『浪速の財』に関する古文書ですか？興味深いですね。", nowStoryName);
setTalk("shota", "君もこの文書に興味があるのか？実は、この文書には宝の手がかりが隠されているかもしれない。", nowStoryName);
setTalk("aoi", "宝？面白い。私も取材で大阪を回っているんですが、この謎、解いてみたいな。一緒に協力しませんか？", nowStoryName);
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