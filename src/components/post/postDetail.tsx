import React from 'react';
import styled from 'styled-components';

import { post } from '../../modules/post/type';
import { ThemeColor } from '../../styles/pallete';
import Button from '../common/Button';
import Detail from '../common/Detail';

const PostDetailBox = styled.div`
    .contentWrap {
       .content {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 0.1rem;
            align-items: baseline;
            & > .title {
                padding: 0.2rem;
                padding-left: 0.8rem;
                grid-column: 2 / 4;
                background-color: white;
                border-radius: 5px;

                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            & > .context {
                padding: 1rem;
                grid-column: 2 / 5;
                background-color: white;
            }
        }
        .body {
            width: 60%;
            padding: 0.2rem;
            & > p {
                padding: 0.2rem;
                padding-left: 0.8rem;
                grid-column: 2 / 4;
                background-color: white;
                border-radius: 5px;
            }
        }
    }
    .buttonWrapper {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
interface PostDetailProps {
    onClose: () => void;
    detail: post | null;
}

const PostDetail: React.FC<PostDetailProps> = ({detail,onClose}) => {
    return (
        <>
            {detail &&
                <Detail>
                    <PostDetailBox>
                        <h3>게시글 상세 정보</h3>
                        <div className="contentWrap">
                            <div>
                                <div className="content">
                                    <span>글 번호 / 제목: </span>
                                    <p className="title">{detail.id}. {detail.title}</p>
                                </div>
                            </div>
                            <div className="content">
                                <span>본문 내용</span>
                                <p className="context">{detail.body}</p>
                            </div>
                            <div className="buttonWrapper">
                                <Button 
                                    ButtonSize="l"
                                    Option={ThemeColor.ButtonSample1}
                                    onClick={onClose}
                                >
                                    닫기
                                </Button>
                            </div>
                        </div>
                        
                    </PostDetailBox>
                </Detail>
            }  
        </>
         
    )
}
    
export default PostDetail;