import axios from "./defaultClient";

export const getPostList = () => {
    return axios.get(`https://jsonplaceholder.typicode.com/posts`);
}
export const getPostDetail = (id: number) => {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
}