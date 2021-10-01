import React from 'react';
import styled from 'styled-components';
import { SubNavigationList } from '../../constants/subNavigation';
import Header from '../common/header/Header';
import Sidebar from '../common/sidebar/Sidebar';

const AppLayoutBlock = styled.div`
    height: 120vh;
    display: flex;
    .contentWrapper {
        width: 85%;
        height: 90%;
        padding: 2rem;
    }
`

interface AppLayoutProps {}

const AppLayout: React.FC<AppLayoutProps> = ({children}) => {
    return (
        <>
            <Header />
            <AppLayoutBlock>
                <Sidebar navigation={SubNavigationList} />
                <div className="contentWrapper">
                    {children}
                </div>
            </AppLayoutBlock>
        </>
    )
}

export default AppLayout;