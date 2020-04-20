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
       console.log(msg);
       io.emit(SocketIoEmitMessage.CHAT_MESSAGE, msg + '_Server');
   });

   socket.on(SocketIoEvent.DISCONNECT, () => {
      io.emit(SocketIoEmitMessage.MESSAGE, 'Leave the chat room');
   });
});

const port = 3001 || process.env.PORT;
server.listen(port, () => console.log(`The server has started on port: ${port}`));
