import { Message, SEND_MESSAGE, DELETE_MESSAGE, SYSTEM_MESSAGE } from "./types";

export function sendMessage(newMessage: Message) {
    return {
        type: SEND_MESSAGE,
        payload: newMessage
    };
}

export function receiveSystemMessage(newMessage: Message) {
    return {
        type: SYSTEM_MESSAGE,
        payload: newMessage
    }
}

export function deleteMessage(timestamp: number) {
    return {
        type: DELETE_MESSAGE,
        meta: {
            timestamp
        }
    };
}
