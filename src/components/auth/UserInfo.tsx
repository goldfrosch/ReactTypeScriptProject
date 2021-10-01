import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../modules';
import { ThemeColor } from '../../styles/pallete';
import PdfUtils from '../../utils/PdfUtils';
import Button from '../common/Button';

const UserInfoBlock = styled.div`
    width: 100%;
    .userInfoBlock {
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
        background-color: white;
        border-radius: 1rem;
        padding: 1rem;
        .GridBlock {
            margin: 0.1rem;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            .GridItem {
                margin: 1rem;
                padding: 0.5rem;
                display: grid;
                grid-template-columns: 8rem 1fr;
                align-items: center;
                p {
                    background-color: white;
                    padding: 0.5rem 1rem;
                    margin: 0;
                    border-radius: 5px;
                    border: 1px solid #eee;
                }
            }
        }
    }
    .printBlock {
        display: flex;
        justify-content: flex-end;
        margin: 1rem;
    }
`
interface UserInfoProps {}

const UserInfo: React.FC<UserInfoProps> = () => {
    const UserProfile = useSelector((state: RootState) => state.userReducer.profile);

    const ConverPDFDownload = () => {
        const input = document.getElementById("userInfoPDF");
        PdfUtils.PDFDownload(input!,"userInfo",true);
    }

    return (
        <UserInfoBlock>
            <h2>유저 정보</h2>
            <div className="userInfoBlock" id="userInfoPDF">
                <div className="GridBlock">
                    <div className="GridItem">
                        <span>유저 고유 번호: </span>
                        <p>{UserProfile.id}</p>
                    </div>
                    <div className="GridItem">
                        <span>유저 아이디: </span>
                        <p>{UserProfile.username}</p>
                    </div>
                    <div className="GridItem">
                        <span>유저 닉네임: </span>
                        <p>{UserProfile.nickname}</p>
                    </div>
                    <div className="GridItem">
                        <span>유저 전화번호: </span>
                        <p>{UserProfile.phone}</p>
                    </div>
                    <div className="GridItem">
                        <span>유저 등급: </span>
                        <p>{UserProfile.type}</p>
                    </div>
                </div>
            </div>
            <div className="printBlock">
                <Button 
                    ButtonSize="m"
                    Option={ThemeColor.ButtonSample2}
                    onClick={ConverPDFDownload}
                >
                    페이지 저장
                </Button>    
            </div>
            
        </UserInfoBlock>
    )
}

export default UserInfo;