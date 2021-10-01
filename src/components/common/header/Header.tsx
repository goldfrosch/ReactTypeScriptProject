import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../../modules';
import { userLogoutAction } from '../../../modules/auth/auth';
import { postRemoveAction } from '../../../modules/post/posts';
import { Pallete, ThemeColor } from '../../../styles/pallete';
import Button from '../Button';

const HeaderStyle = styled.div`
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0.5rem;
    background-color: ${Pallete.header};
    color: white;
    span {
        margin-right: 1rem;
    }
`

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
    const UserProfile = useSelector((state: RootState) => state.userReducer.profile);
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(userLogoutAction());
        dispatch(postRemoveAction());
    }

    return(
        <HeaderStyle>
            <span>{UserProfile.nickname}님 환영합니다</span> 
            <Button 
                ButtonSize="m"
                onClick={onLogout}
                Option={ThemeColor.ButtonSample1}
            >
                로그아웃
            </Button>
        </HeaderStyle>
    )
}

export default Header;