export enum SocketIoEmitMessage  {
    MESSAGE = 'message',
    CHAT_MESSAGE = 'chat_message',
    SYSTEM_MESSAGE = 'system_message'
}

export enum SocketIoEvent {
    CONNECTION = 'connection',
    DISCONNECT = 'disconnect',
    RECEIVE_CHAT_MESSAGE = 'chat_message'
}
