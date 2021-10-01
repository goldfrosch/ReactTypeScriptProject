import { postGetAction, postGetDetailAction, postGetDetailSuccessAction, postGetSuccessAction, postRemoveAction, postRemoveDetailAction } from "./posts";

export interface post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export type postList = post[];

export interface IPostState {
    postList: postList;
    detailPost: post | null;
}

export type PostAction = 
| ReturnType<typeof postGetAction>
| ReturnType<typeof postGetSuccessAction>
| ReturnType<typeof postRemoveAction>
| ReturnType<typeof postGetDetailAction>
| ReturnType<typeof postGetDetailSuccessAction>
| ReturnType<typeof postRemoveDetailAction>