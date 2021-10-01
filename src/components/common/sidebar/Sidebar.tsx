import React from 'react';
import styled from 'styled-components';
import { NavLink, useHistory } from 'react-router-dom';

import { ISubNavigation } from '../../../constants/subNavigation';
import { Pallete } from '../../../styles/pallete';
import rightArrow from "../../../assets/common/right_arrow.png";
import rightSelArrow from "../../../assets/common/right_arrow_sel.png";

interface SideProps {
    navigation: ISubNavigation[];
};

const SidebarBlock = styled.ul`
    width: 15%;
    margin: 0;
    padding: 0;
    padding-top: 1rem;
    height: inherit;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
    background-color: white;
    .icon {
        width: 1.5rem;
        margin-right: 3px;
    }
    .arrow {
        width: 0.9rem;
    }
    & > li {
        width: 90%;
        margin: 0 auto;
        a {
            color: black;
            font-weight: 550;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            padding: 1rem;
            & > * {
                display: block;
            }
            span {
                font-weight: 600;
            }
        }
    }

    .active {
        background-color: ${Pallete.tertiary};
        color: white;
        border-radius: 10px;
    }
`
const Sidebar: React.FC<SideProps> = ({ navigation }) => {
    const history = useHistory();
    return (
        <SidebarBlock>
            {navigation.map((nav) => (
                <li key = {nav.path}>
                    <NavLink to={nav.path} exact={nav.exact} activeClassName="active">
                        <img className="icon" src={history.location.pathname === nav.path ? nav.icon_sel : nav.icon} alt="icon" />
                        {nav.title}
                        <img className="arrow" src={history.location.pathname === nav.path ? rightSelArrow : rightArrow} alt="" />
                    </NavLink>
                </li>
            ))}
        </SidebarBlock>
    )
}

export default Sidebar;