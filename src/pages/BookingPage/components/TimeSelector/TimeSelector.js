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

class TimeSelector extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, onSelect, invalidAppointments } = this.props;
    const invalidTime = [];
    invalidAppointments.forEach((appointment) => {
      invalidTime.push(appointment.startingTime);
    });
    console.log(invalidTime);
    return (
      <Layout>
        <h3>{title}</h3>
        <Radio.Group onChange={onSelect}>
          {APPOINTMENT_TIMES.map((time) => {
            let valid = true;
            invalidTime.forEach((t) => {
              if (t === time + ":00") valid = false;
            });

            if (valid)
              return (
                <Radio.Button key={time} value={time} style={{ margin: 8 }}>
                  {time}
                </Radio.Button>
              );
            else
              return (
                <Radio.Button
                  key={time}
                  value={time}
                  disabled={true}
                  style={{ margin: 8 }}
                >
                  {time}
                </Radio.Button>
              );
          })}
        </Radio.Group>
      </Layout>
    );
  }
}

export default TimeSelector;
