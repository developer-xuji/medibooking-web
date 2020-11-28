import React from "react";
import styled from "styled-components";
import CardIcon from "../../../CardIcon";
import { THEME_COLOR } from "../../../../../../constants";

const Layout = styled.div`
  display: flex;
  width: 300px;
  height: 120px;
  border: 1px solid gray;
  border-radius: 8px;
  margin: 1vw;
  text-decoration: none;

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
  line-height: 100px;
`;

const ServiceCard = ({ icon, text, href }) => {
  return (
    <Layout as="a" href={href}>
      <CardIcon icon={icon} icon_width="50px" />
      <TextArea>
        <h4>{text}</h4>
      </TextArea>
    </Layout>
  );
};
export default ServiceCard;
