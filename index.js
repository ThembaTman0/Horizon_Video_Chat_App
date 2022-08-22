const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");
const { Socket } = require("socket.io");

// io severside instance
const io =require("socket.io")(server, {
    cors:{
        origin: "*",
        methods: ["GET", "POST"]
    }
    
});

app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/", (req,res)=>{
    res.send('Server is running');
});

io.on('connection', (socket) =>{
    // Give us our call id
    socket.emit('me', socket.id);
    // Disconnect chat
    socket.on('disconnect', ()=>{
        socket.broadcast.emit("callended");
    });
    socket.on('calluser', ({userToCall, signalData, from, name})=>{
        io.to(userToCall).emit("calluser", {signal: signalData, from, name});
    });

    socket.on('answercall', (data)=>{
        io.to(data.to).emit("cakkaccepted", data.signal);
    })
});

server.listen(PORT, ()=> console.log(`Server listening on port ${PORT}`));