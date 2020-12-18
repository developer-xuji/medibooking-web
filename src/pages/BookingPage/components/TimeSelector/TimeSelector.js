import React from "react";
import styled from "styled-components";
import "antd/dist/antd.css";
import { TimePicker } from "antd";

const FORMAT = "HH:mm";
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 200px;
`;
const Title = styled.div``;

const TimeSelector = ({ title, onSelect }) => {
  return (
    <Layout>
      <h3>{title}</h3>
      <TimePicker format={FORMAT} onChange={onSelect} />
    </Layout>
  );
};

export default TimeSelector;
