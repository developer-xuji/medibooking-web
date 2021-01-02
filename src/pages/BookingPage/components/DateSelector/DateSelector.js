import React from "react";
import { DatePicker } from "antd";
import styled from "styled-components";
import moment from "moment";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 36px;
`;
const FORMAT = "YYYY-MM-DD";

const DateSelector = ({ title, onSelect }) => {
  return (
    <Layout>
      <h3>{title}</h3>
      <DatePicker
        size="default"
        disabledDate={(current) =>
          current < moment().subtract(1, "days").endOf("day")
        }
        format={FORMAT}
        onChange={onSelect}
        style={{ height: "42px" }}
      />
    </Layout>
  );
};

export default DateSelector;
