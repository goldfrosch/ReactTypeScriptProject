import { ILoginForm } from "../modules/auth/type";
import axios from "./defaultClient";

export const login = (loginForm: ILoginForm) => {
    return axios.post("http://115.91.73.66:19721/auth/login", loginForm);
}

export const getProfile = () => {
    return axios.get("http://115.91.73.66:19721/user/me");
}