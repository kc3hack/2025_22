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
    joinNazo(); // 参加を送信
});


let memberNum = 0;
// 参加者が来たことを記録
socket.on("joinCharacterNazo", (data) => {
    memberNum++;
    if(memberNum==2){
        // スタートする
        socket.emit("memberOK");
    }else{
        showOnlyMes(`${getMyCharacter()=="shota"?"葵":"翔太"}を待っています...`);
    }
});

socket.on("nazoStart",()=>{
    showControl();
});


// 参加したことを知らせる
function joinNazo() {
    socket.emit("joinNazo");
}


// メンバーが揃っているか
function memberStatus(){
    return memberNum==2 ? true:false;
}

/*------------------------------------*/
