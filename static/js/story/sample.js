
// テスト用
new dialog("playSe","tap.mp3","mainStory1");
new dialog("playBgm","yoake.m4a","mainStory1");
new dialog("showCharacter","uranaishi","mainStory1");
new dialog("chengeBackImg","yuhi","mainStory1");

// メインストーリー1
new dialog("narration","翔太と葵のとある１日．．．","mainStory1");
new dialog("aoi","どこに行くのですか？","mainStory1");
new dialog("shota","大学に行ってくる!","mainStory1");
new dialog("hideCharacter","uranaishi","mainStory1");
new dialog("narration","なぜだか，謎の老人と占い師もやってきました．","mainStory1");
new dialog("rojin","それはおいしいのかね？","mainStory1");
new dialog("uranaishi","何を言ってるんじゃ？","mainStory1");

// 選択肢を設定
setChoice(1,"あなたの行動を選択してください．","プログラムの勉強をする","Java演習をする","C演習をする");

// 選択肢1
new dialog("aoi","勉強熱心ですね！！","choice1Story");
new dialog("shota","それほどでもないよ","choice1Story");
// 選択肢2
new dialog("aoi","まだJava演習終わってなかったんですか？","choice2Story");
new dialog("shota","はい．．．Java演習終わってないです．","choice2Story");
// 選択肢3
new dialog("aoi","まだC演習終わってなかったんですか？","choice3Story");
new dialog("shota","はい．．．C演習終わってないです．","choice3Story");

// メインストーリー2
new dialog("aoi","おかえりなさい","mainStory2");
new dialog("shota","ただいま！！","mainStory2");
