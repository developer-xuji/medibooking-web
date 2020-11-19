import React from 'react';
import styled from 'styled-components';
import SignUpPage from '../../../../../SignUpPage';

const HORIZONTAL_GAP = '20px';
const VERTICAL_GAP = '20px';

const Overlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.75);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CloseButton = styled.button`
    background: transparent;
    position: absolute;
    padding: 10px;
    outline: 0;
    border: 0;
    right: ${HORIZONTAL_GAP};
    top: ${VERTICAL_GAP};
    color: gray;
    font-size: 50px;
    cursor: pointer;
    &: hover{
        color: lightgray;
    }
`;

const SignUpModel = ({
    onClose
}) => {
    return(
        <Overlay>
            <SignUpPage />
            <CloseButton onClick = {onClose}>X</CloseButton>
        </Overlay>
    )
}
export default SignUpModel;