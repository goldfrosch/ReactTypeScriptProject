import React from 'react';
import { useDispatch } from 'react-redux';
import LoginForm from '../../components/auth/Login';
import useInputs from '../../hooks/useInputs';
import { userLoginAction } from '../../modules/auth/auth';
import { ILoginForm } from '../../modules/auth/type';

interface LoginContainerProps {}

const LoginContainer: React.FC<LoginContainerProps> = () => {
    const dispatch = useDispatch();

    const [inputs,onChange] = useInputs<ILoginForm>({
        username: "",
        password: "",
    })

    const onLogin = () => {
        if(inputs.username === "") return alert("아이디를 입력해주세요");
        if(inputs.password === "") return alert("비밀번호를 입력해주세요");

        dispatch(userLoginAction({
            username: inputs.username,
            password: inputs.password,
        }))
    }

    return (
        <LoginForm inputs={inputs} onChange={onChange} onLogin={onLogin} />
    )
}

export default LoginContainer;