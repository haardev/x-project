import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { SocketIoEmitMessage } from 'common-modules';
import Home from "./pages/Home";
import { SocketInstance } from "./socket";
import { connect } from "react-redux";
import { sendMessage } from "./redux/chat/actions";

const App = ({sendMessage}) => {
    useEffect(() => {
        const socketInstance = SocketInstance.getInstance();
        socketInstance.socket.on(SocketIoEmitMessage.MESSAGE, (data: string) => console.log(data));
        socketInstance.socket.on(SocketIoEmitMessage.CHAT_MESSAGE, (data: string) => sendMessage({
            timestamp: new Date().getTime(),
            message: data,
            user: 'Hasan'
        }));
    }, []);
    return (
        <div className="App">
            <header>
                Project X
            </header>
            <div className="container">
                <Switch>
                    <Route component={ Home }
                           exact
                           path={ '' }/>
                </Switch>
            </div>
        </div>
    );
};

export default connect(
    null,
    {sendMessage},
)(App);
