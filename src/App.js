import React from 'react';
import Navigation from './components/Navigation';

import styled from 'styled-components';

const Debug = styled.div`
    background-color: black;
`;

const App = () => {
    return (
        <Debug>
            <Navigation />
        </Debug>
    )
}
export default App;