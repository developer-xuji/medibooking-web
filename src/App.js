import React from 'react';
import Navigation from './components/Navigation';
import SignUpPage from './components/SignUpPage';
import styled from 'styled-components';

const Debug = styled.div`
    background-color: white;
`;

const App = () => {
    return (
        <Debug>
            <Navigation />
            <SignUpPage />
        </Debug>
    )
}
export default App;