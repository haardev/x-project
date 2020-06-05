export enum MessageType {
    USER_MESSAGE = 1,
    SYSTEM_MESSAGE = 2
}

export interface Message {
    user: string;
    message: string;
    messageType: MessageType
    timestamp: number;
}

export interface ChatState {
    messages: Message[];
}

// Describing the different ACTION NAMES available
export const SEND_MESSAGE = "SEND_MESSAGE";
export const DELETE_MESSAGE = "DELETE_MESSAGE";
export const SYSTEM_MESSAGE = 'SYSTEM_MESSAGE';

interface SendMessageAction {
    type: typeof SEND_MESSAGE;
    payload: Message;
}

interface SystemMessageAction {
    type: typeof SYSTEM_MESSAGE,
    payload: Message
}

interface DeleteMessageAction {
    type: typeof DELETE_MESSAGE;
    meta: {
        timestamp: number;
    };
}

export type ChatActionTypes = SendMessageAction | DeleteMessageAction | SystemMessageAction;
