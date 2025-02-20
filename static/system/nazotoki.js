// 謎解きコーナ開始の音
playSe("nazotokiko-na.mp3");
playBGM("cryonicpulse.mp3");
// ボタンの要素
const btn01 = document.getElementById("choice1");
const btn02 = document.getElementById("choice2");
const btn03 = document.getElementById("choice3");
const btn04 = document.getElementById("choice4");
const btn05 = document.getElementById("choice5");
// answerBox
const answerBox = document.getElementById("answerBox");
// 通知
const notificationMes = document.getElementById("result");
const notificateBox = document.getElementById("notificateBox");

// セリフボタン
const doAnswer = document.getElementById("doAnswer");
const doChat = document.getElementById("doChat");

// 回答番号
let ansNum;
let correct = false;

// 次のページ
let nextUrl;

// 結果表示
function showResult(text){
    notificateBox.style.display = "block";
    notificationMes.innerText = text;
}

// 結果を非表示
function hideResult(){
    hideAnswerBtn();    // SEもなる
    notificateBox.style.display = "none";
    if(correct){
        chengePlayTapSe(nextUrl);
    }
}


// ボタンを設定(選択肢1，選択肢2，選択肢3，選択肢4，選択肢5，回答番号)
function setAnswerBtn(text01,text02,text03,text04,text05,ans){
    btn01.innerText = text01;
    btn02.innerText = text02;
    btn03.innerText = text03;
    btn04.innerText = text04;
    btn05.innerText = text05;
    ansNum = ans;
}

// ボタンを表示
function showAnswerBtn(){
    playSe("windowopen.mp3");
    hideChatBox();
    doAnswer.innerText = "回答ボタンを非表示にする";
    doAnswer.onclick = hideAnswerBtn;
    answerBox.style.display = 'block';
}

// ボタンを非表示
function hideAnswerBtn(){
    playSe("windowopen.mp3");
    doAnswer.innerText = "回答ボタンを表示する";
    doAnswer.onclick = showAnswerBtn;
    answerBox.style.display = 'none';
}

// 回答確認
function ans(num){
    if(num==ansNum){
        playSe("seikai.mp3");
        showResult("正解です！おめでとうございます！");
        correct = true;
    }else{
        playSe("huseikai.mp3");
        showResult("残念ながら不正解です。もう一度挑戦しましょう！！");
    }
}

// 次のページを指定
function setNextPage(url){
    nextUrl = url;
}



// チャット欄
const chat = document.getElementById("chatBox");
// チャット欄を表示
function showChatBox(){
    chat.style.display = "block";
    hideResult();   // 音も鳴る
    doChat.innerText = "チャットを閉じる";
    doChat.onclick = hideChatBox;
}
// チャット欄を非表示
function hideChatBox(){
    playSe("windowopen.mp3");
    chat.style.display ="none";
    doChat.innerText = "チャットを開く";
    doChat.onclick = showChatBox;
}