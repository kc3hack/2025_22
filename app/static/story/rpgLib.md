# 「rpgLib」
## キャラクターID
|翔太|謎の老人|住職|  占い師   |葵|
|----|------|----|---------|---|
|shota|rojin|jushoku|uranaishi|aoi|
## ストーリーID
|メインストーリー1|メインストーリー2|
|---------------|--------------|
|mainStory1|mainStory2|


|選択肢1のストーリー|選択肢2のストーリー|選択肢3のストーリー|
|----------------|----------------|----------------|
|choice1Story|choice2Story|choice3Story|


## ファイル名
### BGM
- akaneironokazetotomoni.mp3
- akisame.mp3
- cryonicpulse.mp3
- hitoiki.m4a
- kodokunashonin.mp3
- natunoyozora.mp3
- sabitsuitasekai.mp3
- seiu.mp3
- souryou.mp3
- suzukaze.mp3
- syuuennwokanaderumono.mp3
- tennkyuu.mp3
- yoake.m4a
- yuugure.MP3
- dojinamajo.m4a
- twilightmemory.mp3
### SE
- 不正解
huseikai.mp3
- 風に揺れる
kazeniyureru.mp3
- 木々が揺れる
kigigayureru.mp3
- 木の葉が吹かれる
konohagahukareru.mp3
- 雲の上
kumonoue.mp3
- 静電気
seidenki.mp3
- 正解
seikai.mp3
- 雀が鳴く朝
suzumeganakuasa.mp3
- 鳥が飛び立つ
torigatobitatsu.mp3
- 夏の山1
natunoyama1.mp3
- 夏の山2
natunoyama2.mp3
### 背景
- 古本屋
huruhonya.jpg
- 神社
jinja.jpg
- 鈴虫寺
suzumusidera.png
- 竹田城
takedajho.png
- 滝
taki.jpg
- 占い師の部屋
uranainoheya.png
- 和歌山城
wakayamajho.png
- 夕日
yuhi.jpg
- 商店街
shotengai.jpg
- 空
sora.jpg
- 占い部屋外
uranaiyaSoto.jpg
- 古本屋外
huruhonyaSoto.jpg
- 神社への道
jinjaHenoMiti.jpg

## メソッド
### 開発者モードに切り替える
```
developMent();
```

### ナレーションを設定：（本文，ストーリーID）
```
setNarration(text,storyId);
```

### 会話を設定：（キャラクターID,会話文，ストーリーID）
```
setTalk(characId,text,storyId);
```


### キャラクターを表示に設定：（キャラクターID,ストーリーID）
```
setShowCharacter(characId,storyId);
```

### キャラクターを非表示に設定：（キャラクターID,ストーリーID）
```
setHideCharacter(characId,storyId);
```
### BGMを設定：（ファイル名，ストーリーID）
```
setPlayBgm(fileName,storyId);
```

### SEを設定：（ファイル名，ストーリーID）
```
setPlaySe(fileName,storyId);
```
### 背景を設定：（ファイル名，ストーリーID）
```
setBackImage(fileName,storyId);
```
### 追加画像を表示
```
setShowTempImage(fileName,storyId);
```

### 追加画像を非表示
```
setHideTempImage(storyId);
```

### 次のページを設定
```
setNextPage(url);
```

### 選択肢を設定（正しい選択肢，テキスト,選択肢1,選択肢2,選択肢3）
```
// 選択肢をセット(選択番号，メッセージ，選択肢1,選択肢2,選択肢3,回答者)
setChoice(choiceNum,mes,choice01,choice02,choice03,ansCharacter);
```


# howToUse
RPGのシナリオデータ（プログラム）は，下記のディレクトリに格納する
```
/static/story/
```
次のコマンドでディレクトリを移動しておく
```
cd static/story
```
Visual Studio Codeを起動する
```
code .
```
>【Tips】storyフォルダーに格納されている「rpgLib.js」もVisual Studio Codeで開いておくと予測変換が出る．
シナリオデータ（プログラム）は以下のように記述する．

※メインストーリー2や選択肢がない場合は記述しない．
```
/* ストーリー設定 */


/* 
開発中は記述しておくことをお勧めします．
本番にはコメントアウトします.
*/
// developMent();    // 開発者モード

// メインストーリー1
let nowStoryName = "mainStory1";


// 選択肢を設定


// 選択肢1
nowStoryName = "choice1Story"

// 選択肢2
nowStoryName = "choice2Story";

// 選択肢3
nowStoryName = "choice3Story";

// メインストーリー2
nowStoryName = "mainStory2";

// 次のページ指定
setNextPage("");
```

### サンプルプログラム
```
/* ストーリー設定 */
// サンプルファイルです．

// developMent();   // 開発者モードに切り替える（ページ遷移オフ）

// メインストーリー1
let nowStoryName = "mainStory1";
setBackImage("taki.jpg",nowStoryName);
setPlayBgm("yoake.m4a",nowStoryName);
setShowCharacter("aoi",nowStoryName);
setShowCharacter("shota",nowStoryName);
setNarration("翔太と葵のとある１日．．．",nowStoryName);
setTalk("shota","画像を表示します．",nowStoryName);
setShowTempImage("sample.png",nowStoryName);
setBackImage("yuhi.jpg",nowStoryName);
setTalk("aoi","どこに行くのですか？",nowStoryName);
setTalk("shota","大学に行ってくる!",nowStoryName);
setHideTempImage(nowStoryName);
setTalk("aoi","画面を非表示にしました．",nowStoryName);
setNarration("なぜだか，謎の老人と占い師もやってきました．",nowStoryName);
setShowCharacter("rojin",nowStoryName);
setShowCharacter("uranaishi",nowStoryName);
setPlayBgm("hitoiki.m4a",nowStoryName);
setTalk("rojin","それはおいしいのかね？",nowStoryName);
setTalk("uranaishi","何を言ってるんじゃ？",nowStoryName);
setNarration("二人はさっていった",nowStoryName);
setBackImage("uranainoheya.png",nowStoryName);
setHideCharacter("uranaishi",nowStoryName);
setHideCharacter("rojin",nowStoryName);

// 選択肢を設定
setChoice(1,"あなたの行動を選択してください．","プログラムの勉強をする","Java演習をする","C演習をする");

// 選択肢1
nowStoryName = "choice1Story"
setPlayBgm("seiu.mp3",nowStoryName);
setTalk("aoi","勉強熱心ですね！！",nowStoryName);
setTalk("shota","それほどでもないよ",nowStoryName);

// 選択肢2
nowStoryName = "choice2Story";
setPlayBgm("sabitsuitasekai.mp3",nowStoryName);
setTalk("aoi","まだJava演習終わってなかったんですか？",nowStoryName);
setTalk("shota","はい．．．Java演習終わってないです．",nowStoryName);

// 選択肢3
nowStoryName = "choice3Story";
setPlayBgm("souryou.mp3",nowStoryName);
setTalk("aoi","まだC演習終わってなかったんですか？",nowStoryName);
setTalk("shota","はい．．．C演習終わってないです．",nowStoryName);

// メインストーリー2
nowStoryName = "mainStory2";
setPlayBgm("syuuennwokanaderumono.mp3",nowStoryName);
setTalk("aoi","おかえりなさい",nowStoryName);
setTalk("shota","ただいま！！",nowStoryName);

// 次のページ指定
setNextPage("/play/nazotokiSample");
```

### デバッグ環境
http://localhost:5000/sys/sideMode