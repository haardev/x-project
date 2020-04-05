import * as React from 'react';
import { Message } from "../redux/chat/types";

interface Props {
    message: Message
}

export const ConversationLine = ({message}: Props) => {
    return (
        <div className="chat-conversation__line">
            <div className="chat-conversation__line__user-name">
                { message.user }:
            </div>
            <div className="chat-conversation__line__text">
                { message.message }
            </div>
        </div>
    );
};
