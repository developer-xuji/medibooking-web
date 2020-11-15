import React from 'react';
import styled from 'styled-components';
import Icon from '../../../../../Icon';

const button_size = 200;
const Layout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: white;
    outline: 0;
    cursor: pointer;
    text-align: left;
    width: ${button_size}px;
    height: ${button_size}px;
    text-align: center;
    border: 1px solid rgba(100,100,100,0.2);

    &:hover {
        width: ${button_size*1.5}px;
        height: ${button_size*1.5}px;
        box-shadow: 0px 10px 8px 0px rgba(0, 0, 0, 0.2);
        margin: 10px;
    }
`;

const BubbleButton = ({
    iconName,
    text
}) => {
    return (
        <Layout>
            <div>
                <Icon 
                    name = {iconName}
                    style = {{ fontSize: "50px", color:"blue" }}
                />
            </div>
            <div>{text}</div>
        </Layout>
    )
}
export default BubbleButton;