import React from 'react';
import styled from 'styled-components';

import Container from '../Container';
import Main from './components/Main';
import Authentication from './components/Authentication';
import NavItem from './components/NavItem';
import LogoImage from '../../asserts/images/logo.png';

const Layout = styled.div`
    display: flex;
    display: -webkit-flex;
    justify-content: space-around;
    align-items: center;
`;

const Wapper = styled.div`
    background: white;
    border-bottom: 1px solid #ccc;
`;

const Logo = styled(NavItem)`
    color: #008fb4;
    text-decoration: none;
    padding-left: 10px;
    padding-right: 0;
`;

const Left = styled.div`
    display: flex;
    display: -webkit-flex;
`;

const Right = styled.div`
`;

const LogoDiv = styled.div`
    background: url(${LogoImage});
    background-size: cover;
    width: 60px;
    height: 60px;
`;

const Navigation = () =>{
    return (
        <Wapper>
            <Container>
                <Layout>
                    <Left>
                        <LogoDiv />
                        <Logo as='a'>MediBooking</Logo>
                        <Main />
                    </Left>
                    <Right>
                        <Authentication>Authentication</Authentication>
                    </Right>  
                </Layout>
            </Container>
        </Wapper>
    )
}
export default Navigation;