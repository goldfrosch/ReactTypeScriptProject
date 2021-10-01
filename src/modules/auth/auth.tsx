import { call, put } from "redux-saga/effects";
import * as UserAPI from "../../api/userAPI"
import { ILoginForm, ILoginProfile, ILoginState, UserAction } from "./type";
import { takeEvery } from "@redux-saga/core/effects";
import { DummyUserData } from "../../constants/subNavigation";
import history from "../../utils/HistoryUtils";
import axios, { AxiosResponse } from "axios";

const USER_LOGIN = "USER_LOGIN" as const;
const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS" as const;

const USER_LOGOUT = "UESR_LOGOUT" as const;

export const userLoginAction = (loginForm: ILoginForm) => ({
    type: USER_LOGIN,
    loginForm,
})

export const userLoginSuccessAction = (loginProfile: ILoginProfile) => ({
    type: USER_LOGIN_SUCCESS,
    loginProfile,
})

export const userLogoutAction = () => ({
    type: USER_LOGOUT,
})

function* loginSaga(action: ReturnType<typeof userLoginAction>) {
    try {
        // const {
        //     data: { status, data },
        // }: AxiosResponse = yield call(UserAPI.login, action.loginForm);

        // axios.defaults.headers["Authorization"] = data.token;
        // localStorage.setItem("CURRENT_USER",data.token);
        // if(status !== "OK") return alert("TEST");
        // yield put(userLoginSuccessAction(data.user));
        yield put(userLoginSuccessAction(DummyUserData));
        history.push("/main");
    } catch(e) {
        console.log(e);
    }
}

export function* userSaga() {
    yield takeEvery(USER_LOGIN,loginSaga);
}

const initialState: ILoginState = {
    profile: {
        type: "GUEST",
    }
}

export default function userReducer(state: ILoginState = initialState,action: UserAction) {
    switch(action.type) {
        case USER_LOGIN_SUCCESS:
            return {...state, profile: action.loginProfile}
        case USER_LOGOUT: {
            history.push("/");
            return initialState;
        }
        default:
            return state;
    }
}