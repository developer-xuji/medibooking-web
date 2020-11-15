import React from 'react';
import styled from 'styled-components';
import BubbleButton from './components/BubbleButton';

const Layout = styled.div`
    display: flex;
    background-color: transparent;
    height: 150px;
`;

const MENU = [{
    key: 'a',
    contains: 'GP',
    iconName: 'user-md',
},{
    key: 'b',
    contains: 'GP',
    iconName: 'user-md',
},{
    key: 'c',
    contains: 'GP',
    iconName: 'user-md',
}];

const ControlBoard = () => {
    return(
        <Layout>
            {MENU.map((i) => (
                <BubbleButton
                    key = {i.key}
                    iconName = {i.iconName}
                    text = {i.contains}
                >
                    GP
                </BubbleButton>
            ))}
            
        </Layout>
    )
}
export default ControlBoard;