const socket = io(location.host);

socket.on("connect", () => {
    //console.log("Socket.IOに接続しました");
});

socket.on("message", (data) => {
    talk(data.character,data.text);
});

function joinRoom() {
    socket.emit("join");
}

function sendChat(text) {
    socket.emit("send_chat", {text: text});
}


joinRoom();
