import { Server } from "socket.io";

const io = new Server({ 
    cors: {
        origin: "http://localhost:3000/"
    }
});

io.on("connection", (socket) => {
    console.log("socket connect!");

    socket.on("disconnect!", () => {
        console.log("socket disconnect!");
    });
});

io.listen(3000);