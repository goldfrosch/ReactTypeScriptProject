import { userLoginAction, userLoginSuccessAction, userLogoutAction } from "./auth";

export interface ILoginForm {
    username: string,
    password: string,
}

export interface ILoginProfile {
    id?: number;
    nickname?: string;
    phone?: string;
    type: string;
    username?: string;
}

export interface ILoginState {
    profile: ILoginProfile;
}

export type UserAction =
| ReturnType<typeof userLoginAction>
| ReturnType<typeof userLoginSuccessAction>
| ReturnType<typeof userLogoutAction>