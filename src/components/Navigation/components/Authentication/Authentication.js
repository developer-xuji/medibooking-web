import React from 'react';
import styled from 'styled-components';
import NavItem from '../NavItem';

const Layout = styled.div`
    display: flex;
`;

const Button = styled(NavItem)`

`;

const Authentication = () => {
    return (
        <Layout>
            <Button>Sign Up</Button>
            <Button>Log in</Button>
        </Layout>
    )
}

export default Authentication;