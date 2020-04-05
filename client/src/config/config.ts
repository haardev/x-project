import {Configuration} from './Configuration';

const {REACT_APP_CHAT_SERVER_URL} = process.env;
export const config: Configuration = {
    socketUrl: REACT_APP_CHAT_SERVER_URL ? REACT_APP_CHAT_SERVER_URL : 'http://localhost:3001'
};
