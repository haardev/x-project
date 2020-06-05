import { ChatActionTypes, ChatState, DELETE_MESSAGE, SEND_MESSAGE, SYSTEM_MESSAGE, } from "./types";

const initialState: ChatState = {
    messages: []
};

export function chatReducer(
    state = initialState,
    action: ChatActionTypes
): ChatState {
    switch (action.type) {
        case SEND_MESSAGE:
        case SYSTEM_MESSAGE:
            return {
                messages: [...state.messages, action.payload]
            };
        case DELETE_MESSAGE:
            return {
                messages: state.messages.filter(
                    message => message.timestamp !== action.meta.timestamp
                )
            };
        default:
            return state;
    }
}
