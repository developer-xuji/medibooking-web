import React from 'react';
import Navigation from './components/Navigation';

import styled from 'styled-components';

const Layout = styled.div`
    line-height: 1.25;
`;

const App = () => {
    return (
        <Layout>
            <Navigation />
        </Layout>
    )
}
export default App;