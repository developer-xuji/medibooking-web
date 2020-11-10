import React from 'react';
import styled from 'styled-components';

import Container from '../Container';
import Main from './components/Main';
import Authentication from './components/Authentication';
import NavItem from './components/NavItem';

const Layout = styled.div`
    display: flex;
    display: -webkit-flex;
    justify-content: space-around;
`;

const Wapper = styled.div`
    background: white;
    border-bottom: 1px solid #ccc;
`;

const Logo = styled(NavItem)`
    color: #008fb4;
    text-decoration: none;
    padding-left: 0;
    padding-right: 0;
`;

const Left = styled.div`
    display: flex;
    display: -webkit-flex;`;
const Right = styled.div`
`;

const Navigation = () =>{
    return (
        <Wapper>
            <Container>
                <Layout>
                    <Left>
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