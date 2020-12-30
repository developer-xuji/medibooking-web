import React from "react";
import "antd/dist/antd.css";
import { List, Avatar } from "antd";
import DoctorCard from "./DoctorCard"
import styled, { css } from "styled-components";
import { THEME_COLOR } from "../../../../constants";
import getDoctors from "../../../../utils/getDoctors";
import getDoctorById from "../../../../utils/getDoctorById";

const DOCTOR_LIST_LENGTH = 5;
const Layout = styled.div`  `;
const ItemBox = styled.div`
  display: flex;
  & ~ & {
     border-top: 1px solid rgba(0, 143, 180, 0.2);
  }
  ${(props) =>
    ({
      true: css`
        background-color: rgba(0, 143, 180, 0.2);
      `,
    }[props.isSelected])}
`;

const DocLink = styled.div`
  margin-top: 8px;
  font-size: 16px;
  text-decoration: underline;
  width: 100%;
  text-align: right;

  a{
    color: ${THEME_COLOR}
  }
  
  `

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
    if (addedDoctorId)
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
                <DoctorCard key={doctor.id} id={doctor.id} firstName={doctor.firstName} lastName={doctor.lastName} gender={doctor.gender} specializations={doctor.specializations}/>
                {/* <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar  src={`https://medibookingbucket.s3-ap-southeast-2.amazonaws.com/DoctorsImage/IMG_${doctor.id}.jpg`} />
                    }
                    title={doctorName}
                    description="Specialization:"
                  />
                </List.Item> */}
              </ItemBox>
            );
          }}
        />
        <DocLink><a href="/doctors">More Doctors →</a></DocLink>
      </Layout>
    );
  }
}
export default DoctorSelector;
