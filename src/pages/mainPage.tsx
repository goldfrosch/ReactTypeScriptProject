import React from 'react';
import { Route, Switch } from 'react-router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import AppLayout from '../components/layout/AppLayout';
import EmptyContainer from '../containers/empty/emptyContainers';
import PostListContainer from '../containers/post/postContainers';
import { userLoginSuccessAction } from '../modules/auth/auth';
import { DummyUserData } from '../constants/subNavigation';
import UserInfoContainer from '../containers/auth/UserInfoContainer';

interface MainPageProps {}

const MainPage: React.FC<MainPageProps> = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userLoginSuccessAction(DummyUserData));
    },[dispatch]);

    return (
        <AppLayout>
            <Switch>
                <Route exact path="/main" component={PostListContainer} />
                <Route path="/main/user" component={UserInfoContainer} />
                <Route path="/main/test1" component={EmptyContainer} />
                <Route path="/main/test2" component={EmptyContainer} />
            </Switch>
        </AppLayout>
    )
}

export default MainPage;