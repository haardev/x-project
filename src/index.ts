import express, { Response, Request } from 'express';
import path from 'path';
import http from 'http';
import cookieParser from 'cookie-parser';
import conversations from './routes/conversations';
import socketio from 'socket.io';
import { SocketIoEvent, SocketIoEmitMessage } from './types/SocketIoTypes';

const app = express();
const port =  3000 || process.env.PORT;

const server = http.createServer(app);

app.use(express.json());
app.use(cookieParser());

// Set static path
app.use(express.static(path.join(__dirname, '../public')));

//Routes
app.use('/conversations', conversations);

const io = socketio(server);

//Default index
app.get('*', (req:Request, res:Response) => {
   res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
 });

 io.on(SocketIoEvent.CONNECTION, socket => {
    socket.emit(SocketIoEmitMessage.MESSAGE, 'You are connected');

    socket.on(SocketIoEvent.DISCONNECT, () => {
       io.emit(SocketIoEmitMessage.MESSAGE, 'Leave the chat room');
    });
 })

server.listen(port, () => console.log(`The server has started on port: ${port}`));