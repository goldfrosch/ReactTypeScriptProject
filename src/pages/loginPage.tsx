import React from 'react';
import styled from 'styled-components';
import LoginContainer from '../containers/auth/LoginContainer';

const LoginBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`
interface LoginProps {};

const LoginPage: React.FC<LoginProps> = () => {
    return(
        <LoginBlock>
            <LoginContainer />
        </LoginBlock>
    )
}

export default LoginPage;