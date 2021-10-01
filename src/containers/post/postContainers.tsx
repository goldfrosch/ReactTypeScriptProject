import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostList from '../../components/post/postList';
import { RootState } from '../../modules';
import { postGetAction, postGetDetailAction, postRemoveDetailAction } from '../../modules/post/posts';

interface PostListContainerProps {}

const PostListContainer: React.FC<PostListContainerProps> = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state: RootState) => state.postReducer.postList);
    const detailPost = useSelector((state: RootState) => state.postReducer.detailPost);
    
    useEffect(() => {
        dispatch(postGetAction());
    },[dispatch])

    const detailGet = (id: number) => {
        dispatch(postGetDetailAction(id));
    }

    const detailRemove = () => {
        dispatch(postRemoveDetailAction());
    }

    return (
        <PostList detailRemove={detailRemove} detailGet={detailGet} detailPost={detailPost} posts={posts} />
    )
}

export default PostListContainer;