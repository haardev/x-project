import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { SocketIoEmitMessage } from 'common-modules';
import Home from "./pages/Home";
import { SocketInstance } from "./socket";
import { connect } from "react-redux";
import { receiveSystemMessage, sendMessage } from "./redux/chat/actions";
import { MessageType } from "./redux/chat/types";
import GoogleMaps from "./pages/GoogleMaps";

const App = ({sendMessage, receiveSystemMessage}) => {
    useEffect(() => {
        const socketInstance = SocketInstance.getInstance();
        socketInstance.socket.on(SocketIoEmitMessage.MESSAGE, (data: string) => console.log(data));
        socketInstance.socket.on(SocketIoEmitMessage.CHAT_MESSAGE, (data: string) => sendMessage({
            timestamp: new Date().getTime(),
            message: data,
            user: 'Hasan'
        }));
        socketInstance.socket.on(SocketIoEmitMessage.SYSTEM_MESSAGE, (data: string) => receiveSystemMessage({
            timestamp: new Date().getTime(),
            message: data,
            messageType: MessageType.SYSTEM_MESSAGE,
            user: 'SYSTEM'
        }));
    });
    return (
        <div className="App">
            <header>
                Project X
            </header>
            <div className="container">
                <Switch>
                    <Route component={ Home }
                           exact
                           path={ '/' }/>
                    <Route component={ GoogleMaps }
                           path={ '/maps' }/>
                </Switch>
            </div>
        </div>
    );
};

export default connect(
    null,
    {sendMessage, receiveSystemMessage},
)(App);
