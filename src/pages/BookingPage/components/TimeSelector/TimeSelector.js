import React from "react";
import styled from "styled-components";
import "antd/dist/antd.css";
import { Radio } from "antd";
import { APPOINTMENT_TIMES } from "../../../../constants";
import { THEME_COLOR } from "../../../../constants";
import { TIMES } from "../../../../constants";
import moment from "moment";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;
  margin-top: 36px;

  .ant-radio-button-wrapper{
    margin: 8px;
    padding: 0px 36px;
    height: 36px;
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    border: none;

    &:not(.ant-radio-button-wrapper-disabled) {
      background-color: rgba(0, 143, 180, 0.2);
      color: #5b7189;
    }
  }

  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
    background-color: ${THEME_COLOR}; 
    color: #fff;
    outline: none;
    border:none;
  }

  .ant-radio-group {
    display: flex;
    flex-wrap: wrap;

    @media screen and (max-width: 400px) {
      justify-content: center;
    }
  }
`;

const Notice = styled.div`
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  background-color: rgba(222,134,62, 0.4);
  color: #5b7189;
  width: 220px;
  padding: 8px 12px;
  margin: 0 8px 8px 8px;
`

const isTimeExpired = (time, date) => {
  if (date !== moment().format("YYYY-MM-DD")) return false;
  const { hour } = time;
  const currentHour = parseInt(moment().format("HH"));
  return parseInt(hour) < currentHour || parseInt(hour) === currentHour;
};

class TimeSelector extends React.Component {
  render() {
    const { title, onSelect, invalidAppointments, date } = this.props;
    const invalidTime = [];
    invalidAppointments.forEach((appointment) => {
      invalidTime.push(appointment.startingTime);
    });

    return (
      <Layout>
        <h3>{title}</h3>
        <Notice>All times are in NSW time</Notice>
        <Radio.Group onChange={onSelect}>
          {TIMES(8, 20).map((time) => {
            let valid = true;
            const timeString = time.hour + ":" + time.minute;
            invalidTime.forEach((t) => {
              if (t === timeString + ":00") valid = false;
            });

            return (
              <Radio.Button
                key={time.key}
                value={timeString}
                disabled={!valid || isTimeExpired(time, date)}
              >
                {timeString}
              </Radio.Button>
            );
          })}
        </Radio.Group>
      </Layout>
    );
  }
}

export default TimeSelector;
