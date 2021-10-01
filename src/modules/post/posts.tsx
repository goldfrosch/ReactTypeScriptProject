
import { AxiosResponse } from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import * as postAPI from "../../api/postApi";
import { IPostState, post, PostAction } from "./type";

const POST_GET = "POST_GET" as const;
const POST_GET_SUCCESS = "POST_GET_SUCCESS" as const;

const POST_REMOVE = "POST_REMOVE" as const;
const POST_GET_DETAIL = "POST_GET_DETAIL" as const;
const POST_GET_DETAIL_SUCCESS = "POST_GET_DETAIL_SUCCESS" as const;

const POST_REMOVE_DETAIL = "POST_REMOVE_DETAIL" as const;
export const postGetAction = () => ({
    type: POST_GET,
})

export const postGetSuccessAction = (posts: post[]) => ({
    type: POST_GET_SUCCESS,
    posts,
})

export const postRemoveAction = () => ({
    type: POST_REMOVE,
})

export const postGetDetailAction = (id: number) => ({
    type: POST_GET_DETAIL,
    id,
})

export const postGetDetailSuccessAction = (post: post) => ({
    type: POST_GET_DETAIL_SUCCESS,
    post,
})

export const postRemoveDetailAction = () => ({
    type: POST_REMOVE_DETAIL,
})

function* postGetSaga() {
    try {
        const res: AxiosResponse = yield call(postAPI.getPostList);
        if(res.status !== 200) return alert("에러 발생");
        yield put(postGetSuccessAction(res.data as post[]));
    } catch(e) {
        console.log(e);
    }
}

function* postGetDetailSaga(action: ReturnType<typeof postGetDetailAction>) {
    try{
        const res: AxiosResponse = yield call(postAPI.getPostDetail,action.id);
        if(res.status !== 200) return alert("에러 발생");
        yield put(postGetDetailSuccessAction(res.data as post));
    } catch(e) {
        console.log(e);
    }
}

export function* postSaga(){
    yield takeEvery(POST_GET,postGetSaga);
    yield takeEvery(POST_GET_DETAIL,postGetDetailSaga);
}

//const initialState: postList = [];
const initialState: IPostState = {
    postList: [],
    detailPost: null,
}

export default function postReducer(state = initialState,action: PostAction) {
    switch(action.type){
        case POST_GET_SUCCESS:
            return {...state, postList: action.posts}
        case POST_REMOVE: 
            return {...state, postList: []}
        case POST_GET_DETAIL_SUCCESS:
            return {...state, detailPost: action.post}
        case POST_REMOVE_DETAIL:
            return {...state, detailPost: null}
        default:
            return state;
    }
}