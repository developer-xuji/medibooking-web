import React from "react";
import "antd/dist/antd.css";
import { List, Avatar } from "antd";
import styled, { css } from "styled-components";
import { THEME_COLOR } from "../../../../constants";
import getDoctors from "../../../../utils/getDoctors";
import getDoctorById from "../../../../utils/getDoctorById";

const DOCTOR_LIST_LENGTH = 5;
const Layout = styled.div``;
const ItemBox = styled.div`
  display: flex;
  & ~ & {
    border-top: 1px solid gray;
  }
  ${(props) =>
    ({
      true: css`
        background-color: ${THEME_COLOR};
      `,
    }[props.isSelected])}
`;

class DoctorSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doctorList: null,
      addedDoctor: null,
    };
  }

  componentDidMount() {
    getDoctors().then((response) =>
      this.setState({
        doctorList: response.slice(0, DOCTOR_LIST_LENGTH),
      })
    );
    const { addedDoctorId } = this.props;
    getDoctorById(addedDoctorId).then((response) =>
      this.setState({
        addedDoctor: response,
      })
    );
  }

  render() {
    const { title, selected, onSelect } = this.props;
    const emptyList = [];
    const { doctorList, addedDoctor } = this.state;
    if (
      doctorList &&
      addedDoctor &&
      doctorList.length === DOCTOR_LIST_LENGTH &&
      addedDoctor.id > DOCTOR_LIST_LENGTH
    )
      doctorList.unshift(addedDoctor);

    return (
      <Layout>
        <h3>{title}</h3>
        <List
          itemLayout="horizontal"
          dataSource={doctorList === null ? emptyList : doctorList}
          renderItem={(doctor) => {
            const doctorName = doctor.firstName + " " + doctor.lastName;
            return (
              <ItemBox
                isSelected={selected === doctorName}
                onClick={() => onSelect(doctor)}
              >
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title={doctorName}
                    description="Specialization:"
                  />
                </List.Item>
              </ItemBox>
            );
          }}
        />
        <div>
          <a href="/doctors">More Doctors</a>
        </div>
      </Layout>
    );
  }
}
export default DoctorSelector;
