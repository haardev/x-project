import express, {
   Response,
   Request
} from 'express';
import path from 'path';
import http from 'http';
import cookieParser from 'cookie-parser';
import conversations from './routes/conversations';
import socketio from 'socket.io';

import {SocketIoEmitMessage, SocketIoEvent} from 'common-modules';

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
   socket.emit(SocketIoEmitMessage.MESSAGE, 'Test');

   socket.on(SocketIoEvent.RECEIVE_CHAT_MESSAGE, (msg) => {
       socket.broadcast.emit(SocketIoEmitMessage.CHAT_MESSAGE, msg);
   });

   socket.on(SocketIoEvent.DISCONNECT, () => {
       socket.broadcast.emit(SocketIoEmitMessage.SYSTEM_MESSAGE, 'Someone left the chat room');
   });
});

const port = 3001 || process.env.PORT;
server.listen(port, () => console.log(`The server has started on port: ${port}`));

//Socket events
/*
// sending to sender-client only
socket.emit('message', "this is a test");

// sending to all clients, include sender
io.emit('message', "this is a test");

// sending to all clients except sender
socket.broadcast.emit('message', "this is a test");

// sending to all clients in 'game' room(channel) except sender
socket.broadcast.to('game').emit('message', 'nice game');

// sending to all clients in 'game' room(channel), include sender
io.in('game').emit('message', 'cool game');

// sending to sender client, only if they are in 'game' room(channel)
socket.to('game').emit('message', 'enjoy the game');

// sending to all clients in namespace 'myNamespace', include sender
io.of('myNamespace').emit('message', 'gg');

// sending to individual socketid
socket.broadcast.to(socketid).emit('message', 'for your eyes only');

// list socketid
for (var socketid in io.sockets.sockets) {}
 OR
Object.keys(io.sockets.sockets).forEach((socketid) => {});
 */
