import React from 'react';
import styled from 'styled-components';
import CardIcon from '../../../CardIcon';
import {THEME_COLOR} from '../../../../../../constants';

const Layout = styled.div`
    display: flex;
    width: 300px;
    height: 120px;
    border: 1px solid gray;
    border-radius: 8px;
    margin: 1vw;

    &:hover {
        color: ${THEME_COLOR};
        cursor: pointer;
        & h4 {
            font-size: 20px;
        }
    }
`;

const TextArea = styled.div`
    text-align: center;
    margin-left: 30px;
`;

const ServiceCard = ({
    icon,
    text
}) => {
    return(
        <Layout as='a'>
            <CardIcon icon = {icon} icon_width='50px'/>
            <TextArea><h4>{text}</h4></TextArea>
        </Layout>
    )
}
export default ServiceCard;