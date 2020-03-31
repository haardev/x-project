import express, {
   Response,
   Request
} from 'express';
import path from 'path';
import http from 'http';
import cookieParser from 'cookie-parser';
import conversations from './routes/conversations';
import socketio from 'socket.io';
import {
   SocketIoEvent,
   SocketIoEmitMessage
} from './types/SocketIoTypes';

const PUBLIC_FOLDER: string = '../public';

const app = express();

const server = http.createServer(app);

app.use(express.json());
app.use(cookieParser());

// Set static path
app.use(express.static(path.join(__dirname, PUBLIC_FOLDER)));

//Routes
app.use('/conversations', conversations);

const io = socketio(server);

//Default index
app.get('*', (req: Request, res: Response) => {
   res.sendFile(path.resolve(__dirname, PUBLIC_FOLDER, 'index.html'));
});

io.on(SocketIoEvent.CONNECTION, socket => {
   socket.emit(SocketIoEmitMessage.MESSAGE, 'You are connected');
   console.log('Connected');
   socket.on(SocketIoEvent.DISCONNECT, () => {
      io.emit(SocketIoEmitMessage.MESSAGE, 'Leave the chat room');
   });
})

const port = 3001 || process.env.PORT;
server.listen(port, () => console.log(`The server has started on port: ${port}`));