import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  border-bottom: 1px solid rgba(200, 200, 200, 0.3);
  color: white;
  text-align: center;
`;

const Title = ({ titleName }) => {
  return (
    <Layout>
      <h3>{titleName}</h3>
    </Layout>
  );
};
export default Title;
