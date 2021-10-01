import post from "../assets/icon/document.png"
import post_sel from "../assets/icon/document_sel.png"
import user from "../assets/icon/user.png"
import user_sel from "../assets/icon/user_sel.png"
import extra from "../assets/icon/brand.png"
import extra_sel from "../assets/icon/brand_sel.png"
import { ILoginProfile } from "../modules/auth/type"

export interface ISubNavigation {
    title: string;
    path: string;
    exact: boolean;
    icon: string;
    icon_sel: string;
}

export const DummyUserData: ILoginProfile = {
    id: 1,
    nickname: "마스터",
    phone: "010-1111-1111",
    type: "MASTER",
    username: "test",
}

export const SubNavigationList: ISubNavigation[] = [
    {
        title: "게시글 정보",
        path: "/main",
        exact: true,
        icon: post,
        icon_sel: post_sel,
    },
    {
        title: "유저 정보",
        path: "/main/user",
        exact: false,
        icon: user,
        icon_sel: user_sel,
    },
    {
        title: "테스트1",
        path: "/main/test1",
        exact: false,
        icon: extra,
        icon_sel: extra_sel,
    },
    {
        title: "테스트2",
        path: "/main/test2",
        exact: false,
        icon: extra,
        icon_sel: extra_sel,
    },
]