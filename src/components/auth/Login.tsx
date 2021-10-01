import React, { FormEvent } from 'react';
import styled from 'styled-components';
import { ILoginForm } from '../../modules/auth/type';

const LoginFormBlock = styled.div`
    width: 30rem;
    height: 35rem;
    padding: 5%;
    background-color: white;
    border: 1px solid #CCCCCC;
    .Login {
        .block {
            margin: 8px;
        }
        .inputbox {
            width: 100%;
            height: 2.5rem;
            padding: 0.5rem;
            border: 0.7px solid #CCCCCC;
            border-radius: 0.5rem;
        }
        .loginButton {
            .btn {
                display: flex;
                justify-content: center;
                padding-top: 2rem;
                button {
                    width: 90%;
                    height: 46px;
                    border: 0;
                    border-radius: 54px;
                    font-size: 18px;
                    color: white;
                    background-color: #016241;
                    cursor: pointer;
                }
            }
            span {
                padding: 0 5rem;
            }
        }
    }
`
interface LoginFormProps {
    inputs: ILoginForm;
    onChange: () => void;
    onLogin: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({inputs, onChange, onLogin}) => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onLogin();
    }

    return (
        <LoginFormBlock>
            <div className="Login">
                    <h2>로그인</h2>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="block">
                            <p>아이디</p>
                            <span>
                                <input 
                                    className="inputbox"
                                    type="text"
                                    name="username"
                                    value={inputs.username}
                                    onChange={onChange}
                                    placeholder="아이디를 입력해주세요"
                                 />
                            </span>
                        </div>
                        <div className="block">
                            <p>비밀번호</p>
                            <span>
                                <input  
                                    className="inputbox"
                                    name="password"
                                    type="password"
                                    value={inputs.password}
                                    onChange={onChange}
                                    placeholder="비밀번호를 입력해주세요"
                                />
                            </span>
                        </div>
                        <div className="block">
                            <input type="checkbox" /> 로그인 상태 유지
                        </div>
                        <div className="loginButton">
                            <div className="btn">
                                <button type="submit">
                                    <span>로그인</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
        </LoginFormBlock>
    )
}

export default LoginForm;