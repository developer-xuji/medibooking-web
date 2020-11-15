import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../../asserts/images/background.png';
import ControlBoard from './components/ControlBoard';

const Layout = styled.div`
    display: flex;
    justify-content: center;
    background: url(${backgroundImage});
    min-height: 600px;
    background-size: repeat;
    align-items: center;
`;

const FrontPage = () => {
    return (
        <Layout>
            <ControlBoard></ControlBoard>
        </Layout>
    )
}
export default FrontPage;