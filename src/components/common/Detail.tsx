import React from "react";
import styled from "styled-components";

const DetailBlock = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    .contentWrapper {
        min-width: 40rem;
        width: 40%;
        height: 60%;
        background-color: #eee;
    }
`

interface DetailProps {}

const Detail: React.FC<DetailProps> = ({children}) => {
    return(
        <DetailBlock>
            <div className="contentWrapper">
                {children}  
            </div>
        </DetailBlock>
    )
}

export default Detail;