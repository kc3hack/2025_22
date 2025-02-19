/* 関数まとめ */

/* ストーリー関連 */

// 開発者モード
function developMent(){};

// ナレーションを設定：（本文，ストーリーID）
function setNarration(text,storyId){};

// 会話を設定：（キャラクターID,会話文，ストーリーID）
function setTalk(characId,text,storyId){};


// キャラクターを表示に設定：（キャラクターID,ストーリーID）
function setShowCharacter(characId,storyId){};

// キャラクターを非表示に設定：（キャラクターID,ストーリーID）
function setHideCharacter(characId,storyId){};

// BGMを設定：（ファイル名，ストーリーID）
function setPlayBgm(fileName,storyId){};

// SEを設定：（ファイル名，ストーリーID）
function setPlaySe(fileName,storyId){};

// 背景を設定：（ファイル名，ストーリーID）
function setBackImage(fileName,storyId){};

// 追加画像を表示
function setShowTempImage(fileName,storyId){};

// 追加画像を非表示
function setHideTempImage(storyId){};

// 次のページを設定
function setNextPage(url){};

