import React from "react";
import styled from "styled-components";

import Tag from "./Tag"

const Layout = styled.div`
   margin: 60px 0;`

 const TagWrapper = styled.div`
   display: flex;
   flex-wrap: wrap;
   margin-top: 0;
 `

const TagArea = ({ title, items, color }) => {
    return <Layout>
        <h1>{title}</h1>
        <TagWrapper>{items.map((item) => { return <Tag key={item} text={item} tagColor={color} /> })}</TagWrapper>
    </Layout>
}

export default TagArea