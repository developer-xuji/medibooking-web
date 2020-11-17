import React from 'react';
import styled from 'styled-components';
import Navigation from './components/Navigation';
import FrontPage from './components/FrontPage';
import Footer from './components/Footer';

const Layout = styled.div`
    line-height: 1.25;
`;

const App = () => {
    return (
        <Layout>
            <Navigation />
            <FrontPage />
            <Footer />
        </Layout>
    )
}
export default App;