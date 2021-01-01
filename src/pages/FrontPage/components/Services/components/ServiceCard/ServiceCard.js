import React from "react";
import styled from "styled-components";
import CardIcon from "../../../CardIcon";
import { THEME_COLOR } from "../../../../../../constants";

const Layout = styled.div`
  display: flex;
  width: 300px;
  height: 120px;
  background-color: #fff;
  border-radius: 8px;
  margin: 1vw;
  text-decoration: none;
  align-items: center;
  padding: 10px;
  box-shadow: 6px 0px 10px 4px rgba(174, 204, 84, 0.2);
  border: 2px solid transparent;
  &:hover {
    border: 2px solid ${THEME_COLOR};
    cursor: pointer;
  }
`;

const TextArea = styled.div`
  text-align: center;
  margin-left: 30px;
  line-height: 100px;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
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
