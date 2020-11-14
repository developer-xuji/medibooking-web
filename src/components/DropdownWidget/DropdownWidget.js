import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    position: relative;
`;

const Layout = styled.div`
    position: absolute;
    left: 0;
    background: white;
    border-radius: 5px;
    border: 1px solid rgba(41,43,50,0.1);
    min-width: 150px;
`;
const Item = styled.div`
    padding: 10px 20px;

    &~& {
        margin-top: 1px solid rgba(41,43,50,0.1);
    }
`;

const DropdownWidget = ({
    items,
    children,
    visable
}) => (
    <Box>
        {children}
        {visable && (
            <Layout>
                {items.map( (i) => (<Item key={i.key}>{i.contains}</Item>) )}
            </Layout>   
        )}
        
    </Box>
);

export default DropdownWidget;