import * as React from 'react';
import { NavBar } from "./NavBar";
import Conversation from "./Conversation";
import ChatInputArea from "./ChatInputArea";
import { UsersList } from "./UsersList";

type Props = {};

export const ChatContainer = (props: Props) => {
    return (
        <div className="chat-container">
            <NavBar/>
            <UsersList/>
            <Conversation/>
            <ChatInputArea/>
        </div>
    );
};
