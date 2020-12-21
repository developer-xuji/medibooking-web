import React from "react";
import styled from "styled-components";
import "antd/dist/antd.css";
import { Radio } from "antd";
import { APPOINTMENT_TIMES } from "../../../../constants";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
`;
function onChange(e) {
  console.log(`radio checked:${e.target.value}`);
}

const TimeSelector = ({ title, onSelect }) => {
  return (
    <Layout>
      <h3>{title}</h3>
      <Radio.Group onChange={onSelect}>
        {APPOINTMENT_TIMES.map((time) => (
          <Radio.Button key={time} value={time} style={{ margin: 8 }}>
            {time}
          </Radio.Button>
        ))}
      </Radio.Group>
    </Layout>
  );
};

export default TimeSelector;
