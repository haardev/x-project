import * as React from 'react';
import { connect } from "react-redux";
import { AppState } from "../redux";
import { Message } from "../redux/chat/types";
import { ConversationLine } from "./ConversationLine";

interface Props {
    messages?: Message[];
}

const Conversation = ({messages = []}: Props) => {
    return (
        <div className="chat-conversation">
            <div className="chat-conversation__list">
                { messages.map((item) => <ConversationLine key={item.timestamp} message={item} />) }
            </div>
        </div>
    );
};

const mapStateToProps = (state: AppState) => ({
    messages: state.chat.messages
});

export default connect(
    mapStateToProps,
    null,
)(Conversation);
