import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import { IPostState } from "./post/type";
import postReducer, { postSaga } from "./post/posts";
import userReducer, { userSaga } from "./auth/auth";

export interface IRootState {
    post: IPostState,
}

const rootReducer = combineReducers({
    postReducer, userReducer
})

export default rootReducer;
export function* rootSaga() {
    yield all([postSaga(),userSaga()]);
}

export type RootState = ReturnType<typeof rootReducer>