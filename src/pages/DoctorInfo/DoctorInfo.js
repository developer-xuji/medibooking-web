import React from "react";
import styled from "styled-components";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Link from "./components/Link";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

const Container = styled.div`
  font-family: MessinaSansWeb, Source Sans Pro, sans-serif;
  background: #fff;
  box-shadow: 0 1px 10px rgba(92, 119, 131, 0.15);
  border-radius: 4px;
  margin: 24px auto;
  padding: 24px;
  text-align: center;
`;

const doctors = {
  "0":{
    FirstName : "abc",
    SecondName : "edf",
    PhoneNumber : "15232133213",
    Email : "bcd@gmail.com",
    Language : "English",
    Specialization : "Dental",
  },
  "1":{
    FirstName : "bcd",
    SecondName : "123",
    PhoneNumber : "000000000",
    Email : "abc@gmail.com",
    Language : "Chinese",
    Specialization : "Dental",
  }
};



class DoctorInfo extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      Doctor : {
        DoctorsID : this.props.match.DoctorsID,
        FirstName : doctors[this.props.match.params.doctorsID].FirstName,
        SecondName : doctors[this.props.match.params.doctorsID].SecondName,
        PhoneNumber : doctors[this.props.match.params.doctorsID].PhoneNumber,
        Email : doctors[this.props.match.params.doctorsID].Email,
        Language : doctors[this.props.match.params.doctorsID].Language,
        Specialization : doctors[this.props.match.params.doctorsID].Specialization,
      }
    };

  }

  componentDidMount() {
    // fetch data
  }

  render() {
    return (
      <Container>
        <Profile Doctor={this.state.Doctor}/>
      </Container>
    )
  }
}
// const DoctorInfo = ({match}) => {
//     console.log(match);
//     console.log(match.params.doctorsID);
//     return (
//       <Container>
//         <Profile />
//         <Contact />
//         <Link />
//       </Container>
//     );
//   };
export default DoctorInfo;