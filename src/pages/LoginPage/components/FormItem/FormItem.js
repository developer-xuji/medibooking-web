import React from 'react';
import styled from 'styled-components';

const Layout = styled.div `
    & ~ & {
        margin-bottom:30px;
    }
`;

const Lable = styled.label `
    display: block;
    color: black;
`;

const FormItem = ({
    title,
    children
}) => {
    const Item = children;
    return (
        <Layout>
            <Layout>{title}</Layout>
            <Item />
        </Layout>
    )
}

export default FormItem;