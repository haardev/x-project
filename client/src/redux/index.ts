// @ts-ignore
import { applyMiddleware, combineReducers, createStore } from "redux";
// @ts-ignore
import thunkMiddleware from "redux-thunk";
// @ts-ignore
import { chatReducer } from "./chat/reducers";

// @ts-ignore
const rootReducer = combineReducers({
    chat: chatReducer
});

// @ts-ignore
export type AppState = ReturnType<typeof rootReducer>;

// @ts-ignore
export default function configureStore() {
    const middlewares = [thunkMiddleware];
    const middleWareEnhancer = applyMiddleware(...middlewares);

    return createStore(
        rootReducer,
        middleWareEnhancer
    );
}
