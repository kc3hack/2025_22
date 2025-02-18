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
    doAnswer.innerText = "閉じる";
    doAnswer.onclick = hideAnswerBtn;
    answerBox.style.display = 'block';
}

// ボタンを非表示
function hideAnswerBtn(){
    doAnswer.innerText = "開く";
    doAnswer.onclick = showAnswerBtn;
    answerBox.style.display = 'none';
}

// 回答確認
function ans(num){
    if(num==ansNum){
        showResult("正解です！おめでとうございます！");
        correct = true;
    }else{
        showResult("残念ながら不正解です。もう一度挑戦しましょう！！");
    }
}

// 次のページを指定
function setNextPage(url){
    nextUrl = url;
}