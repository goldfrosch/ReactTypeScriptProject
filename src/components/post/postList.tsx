import React, { useState } from 'react';
import styled from 'styled-components';
import { post, postList } from '../../modules/post/type';
import Button from '../common/Button';

import leftArrow from "../../assets/arrow/left_arrow.png";
import leftEndArrow from "../../assets/arrow/left_arrow_end.png";
import rightArrow from "../../assets/arrow/right_arrow.png";
import rightEndArrow from "../../assets/arrow/right_arrow_end.png";
import Table from '../common/Table';
import PostDetail from './postDetail';
import { ThemeColor } from '../../styles/pallete';
import PdfUtils from '../../utils/PdfUtils';

const PostListBlock = styled.div`
    width: 100%;
    .writeBlock {
        display: flex;
        justify-content: flex-end;
        margin: 0.5rem;
    }
    .postListBlock {
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
        background-color: white;
    }

    .pageList {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 1rem;
        font-weight: bold;
        .pageItem {
            padding: 0.7rem;
            cursor: pointer;
        }
        .selected {
            padding: 0.7rem;
            cursor: pointer;
            border: 3px solid #bebebe;
            border-radius: 1.4rem;
        }
    }
    .disable {
        display: none;
    }
`
interface PostListProps {
    posts: postList;
    detailPost: post | null;
    detailGet: (id:number) => void;
    detailRemove: () => void;
}

const PostList: React.FC<PostListProps> = ({detailPost, detailGet, posts, detailRemove}) => {
    const [currentPage,setCurrentPage] = useState(1);
    const [detail,setDetail] = useState(false);

    const pageItems = 8;
    const TotalPages = Math.ceil(posts.length / pageItems);
    const Pages = [];
    const firstPage = Math.floor((currentPage - 1) / 10) * 10 + 1;

    for(let i = firstPage;i <= firstPage + 9;i++) {
        if(i > TotalPages) break;
        Pages.push(i);
    }

    const indexOfLast = currentPage * pageItems;
    const indexOfFirst = indexOfLast - pageItems;

    function currentPosts(posts: any[]) {
        let currentPosts = [];
        currentPosts = posts.slice(indexOfFirst,indexOfLast);
        return currentPosts;
    }

    const prevPage = () => {
        if(currentPage === 1) return setCurrentPage(1);
        setCurrentPage(currentPage - 1);
    }

    const nextPage = () => {
        if(currentPage === TotalPages) return setCurrentPage(1);
        setCurrentPage(currentPage + 1);
    }

    const setPage = (page: number) => setCurrentPage(page);

    const onOpen = (id: number) => {
        detailGet(id);
        setDetail(true);
    }

    const onClose = () => {
        detailRemove();
        setDetail(false)
    }

    const ConvertPDFDownload = () => {
        const input = document.getElementById("PostsPDF");
        PdfUtils.PDFDownload(input!,"postList",true);
    }

    return(
        <PostListBlock>
            {detail && 
                <PostDetail detail={detailPost && detailPost} onClose={onClose} />
            }
            <h2>게시글 리스트</h2>
            <div className="writeBlock">
                <Button 
                    ButtonSize="m"
                    Option={ThemeColor.ButtonSample2}
                    onClick={ConvertPDFDownload}
                >
                    페이지 저장
                </Button>
                <Button 
                    ButtonSize="m"
                    Option={ThemeColor.ButtonSample2}
                >
                    글 추가하기
                </Button>
            </div>
            <div id="PostsPDF" className="postListBlock">
                <Table>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>유저 아이디</th>
                            <th>타이틀</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentPosts(posts).map((p) => (
                            <tr key={p.id}>
                                <td>{p.id}</td>
                                <td>{p.userId}</td>
                                <td><span>{p.title}</span></td>
                                <td>
                                    <Button
                                        ButtonSize="m"
                                        Option={ThemeColor.ButtonSample3}
                                        onClick={() => onOpen(p.id)}
                                    >
                                        상세보기
                                    </Button>
                                </td>
                            </tr>
                        ))}    
                    </tbody>
                </Table>
                <div className="pageList">
                    <div className={currentPage <= 1  ? "disable" : ""}>
                        <img src={leftEndArrow} onClick={() => setPage(1)} alt="" />
                        <img src={leftArrow} onClick={prevPage} alt="" /> 
                    </div>
                    {Pages.map((p) => (
                        <div 
                            className={currentPage === p ? "selected" : "pageItem"}
                            key={p}
                            onClick={() => setPage(p)}
                        >
                            {p}
                        </div>
                    ))}
                    <div className={currentPage >= TotalPages  ? "disable" : ""}>
                        <img src={rightArrow} onClick={nextPage} alt="" /> 
                        <img src={rightEndArrow} onClick={() => setPage(TotalPages)} alt="" />
                    </div>
                </div>
            </div>
        </PostListBlock>
    )
}

export default PostList;