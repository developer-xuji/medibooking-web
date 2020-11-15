import React from 'react';
import Navigation from './components/Navigation';
import DoctorsPage from './components/DoctorsPage'

import styled from 'styled-components';

const Debug = styled.div`
    background-color: black;
`;

const App = () => {
    return (
        <Debug>
            <DoctorsPage />
        </Debug>
    )
}
export default App;