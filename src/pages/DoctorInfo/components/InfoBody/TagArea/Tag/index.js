import React from "react";
import styled from "styled-components";

const ColorfulTag = styled.span`
  padding: 8px 18px;
  margin-right: 24px;
  margin-top: 12px;
  font-size: 18px;
  font-family: "Open Sans", sans-serif;
  color: #fff;
  font-weight: bold;
`;

const Tag = ({ text, tagColor }) => {
  return (
    <ColorfulTag style={{ backgroundColor: `${tagColor}` }}>{text}</ColorfulTag>
  );
};

export default Tag;
