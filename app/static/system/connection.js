// 現在のキャラクター
let myCharacter;

// 現在のキャラクターを取得（API）
async function getCharacterAPI(){
    try{
        const response = await fetch("/sessionAPI/character");
        if(!response.ok){
            throw new Error("エラー");
        }
        const json = await response.json();
        myCharacter = json.character;
    }catch{
        console.error("エラー");
    }
}        

getCharacterAPI();  // キャラクター情報を取得

// 現在設定されているキャラクター名を取得
function getMyCharacter(){
    return myCharacter;
}


/*----------------通信関係----------------*/
const socket = io(location.host);

socket.on("connect", () => {
    //console.log("Socket.IOに接続しました");
    socket.emit("join");    // ルームに参加
});


let memberNum = 0;
// 参加者が来たことを記録
socket.on("joinCharacter", (data) => {
    memberNum++;
    if(memberNum==2){
        // スタートする
        if(myCharacter==getAnswerCharacter()){
            nextStory();
        }
        memberNum = 0;
    }
});


// スタート番号の受け取り
socket.on("startChoice",(data) => {
    selectNum = data.choiceNum;
    next();
});

// 参加したことを知らせる
function joinChoice() {
    socket.emit("joinChoice");
}

// 選択結果を送信
function sendChoise(num){
    socket.emit("choiseNum",{"choiceNum":num})
}


// メンバーが揃っているか
function memberStatus(){
    return memberNum==2 ? true:false;
}

/*------------------------------------*/
