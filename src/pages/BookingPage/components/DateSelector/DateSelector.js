import React from "react";
import { DatePicker } from "antd";
import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;
const FORMAT = "YYYY-MM-DD";

const DateSelector = ({ title, onSelect }) => {
  return (
    <Layout>
      <h3>{title}</h3>
      <DatePicker size="default" format={FORMAT} onChange={onSelect} />
    </Layout>
  );
};

export default DateSelector;
