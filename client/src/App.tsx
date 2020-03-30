import React, { useEffect } from 'react';
import socketIOClient from "socket.io-client";
import './App.css';
import { config } from './config/config';
import { SocketIoEmitMessage } from 'common-modules';

const App = () => {
  useEffect(() => {
    const socket = socketIOClient(config.socketUrl);
    socket.on(SocketIoEmitMessage.MESSAGE, (data: string) => console.log(data));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        Project X
      </header>
    </div>
  );
}

export default App;
