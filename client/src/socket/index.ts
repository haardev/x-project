import socketIOClient from "socket.io-client";
import { config } from "../config/config";

export class SocketInstance {
    private static instance: SocketInstance;
    public socket: any;

    private constructor() {
        this.socket = socketIOClient(config.socketUrl);
    }

    public static getInstance(): SocketInstance {
        if (!SocketInstance.instance) {
            SocketInstance.instance = new SocketInstance();
        }

        return SocketInstance.instance;
    }
}
