import * as React from 'react';
import { useCallback, useState } from 'react';
import { connect } from "react-redux";
import { sendMessage } from "../redux/chat/actions";
import { Message, MessageType } from "../redux/chat/types";
import { SocketInstance } from "../socket";

type Props = {
    sendMessage: typeof sendMessage
};

const ChatInputArea = ({sendMessage}: Props) => {
    const [chatText, setChatText] = useState('');

    const handleSubmit = useCallback((event) => {
        event.preventDefault();

        if (chatText === '') {
            return;
        }

        const message: Message = {
            user: 'Milen',
            messageType: MessageType.USER_MESSAGE,
            message: chatText,
            timestamp: new Date().getTime()
        };

        sendMessage(message);

        const socketInstance = SocketInstance.getInstance();
        socketInstance.socket.emit('chat_message', chatText);
        setChatText('');
    }, [chatText, sendMessage]);
    return (
        <div className="chat-input-area">
            <form className="chat-input-area__container"
                  onSubmit={ handleSubmit }>
                <input type="text"
                       name="chat"
                       required
                       value={ chatText }
                       onChange={ (event) => setChatText(event.target.value) }
                       className="chat-input-area__input-area"/>
                <input type="submit" className="chat-input-area__submit"/>
            </form>
        </div>
    );
};

export default connect(
    null,
    {sendMessage},
)(ChatInputArea);
