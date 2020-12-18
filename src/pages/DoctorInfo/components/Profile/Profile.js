import React from "react";
import styled from "styled-components";
import image from "./assets/img/doctor.png";

const InfoTable = styled.table`
  color: black;
  font-size: 20px;
  margin-top: 10px;
  line-height: 21px;
  text-align: center;
  border-spacing:50px 3px
`;

const DoctorName = styled.h2`
  color: black;
  font-size: 30px;
`;

const DividingLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: #5c7783;
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 12px;
  font-weight: 500;
  &:before {
    content: "";
    width: 100%;
    height: 1px;
    background: #e3e8ed;
    margin: 0 10px;
  }
  &:after {
    content: "";
    width: 100%;
    height: 1px;
    background: #e3e8ed;
    margin: 0 10px;
  }
`;

const ParentContainer = styled.div`
  position:relative;
  font-family: MessinaSansWeb, Source Sans Pro, sans-serif;
  background: #E0FFFF;
  border-radius: 4px;
  margin: 24px auto;
  padding: 24px;
  text-align: center;
`;

const Container = styled.div`
  left:0;
  font-family: MessinaSansWeb, Source Sans Pro, sans-serif;
  background: #E0FFFF;
  border-radius: 4px;
  margin: 24px auto;
  padding: 24px;
  text-align: center;
`;


const Container3 = styled.div`
  font-family: MessinaSansWeb, Source Sans Pro, sans-serif;
  background: #fff;
  box-shadow: 0 1px 10px rgba(92, 119, 131, 0.15);
  border-radius: 4px;
  margin: 24px auto;
  width: 320px;
  padding: 24px;
  text-align: center;
  border:1px solid black;
  float:right;
  position:absolute;
  right:18px;
`;

const BookButton = styled.button`
  width: 80%;
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 5px;
  padding-top: 6px;
  padding-bottom: 6px;
  height: auto;
  color: white;
  background: #01a4b7;
  border: 2px solid #01a4b7;
  border-radius: 100px;
  cursor: pointer;
`;


const Container2 = styled.div`
  position:absolute;
  right:0;
  font-family: MessinaSansWeb, Source Sans Pro, sans-serif;
  background: white;
  width:300px;
  height:350px;
  
  border-radius: 4px;
  margin: 24px auto;
  padding: 24px;
  text-align: center;
  float:right;
`;

const Profile = (props) => {
  let currentDoctor = props.Doctor;
  
    return (
      <>
          <ParentContainer>
          <Container>
          <Container3>
            <h2>Medibooking</h2>
            <h3>135 Lonsdale Street, Melbourne</h3>
            <h3>Phone:xxxxxxxx</h3>
            <h3>Email:xxxxxx</h3>
            <h3>Open: 8:00am-8:00pm</h3>
            <BookButton>Book Appointment</BookButton>
          </Container3>
          <img src={image} alt="image" />
          <DoctorName>
            {`${currentDoctor.FirstName} ${currentDoctor.SecondName}`}
          </DoctorName>
          <DividingLine />
          <center>
          <InfoTable>
            <tr>
              <td>phone: {currentDoctor.PhoneNumber}</td>
              <td>buildibg: xxxxx</td>
            </tr>
            <tr>
              <td>email: {currentDoctor.Email}</td>
              <td>road: xxxxx</td>
            </tr>
            <tr>
              <td>Language: {currentDoctor.Language}</td>
              <td>Specialization: {currentDoctor.Specialization}</td>
            </tr>
          </InfoTable>
          </center>
          </Container>
          </ParentContainer>
      </>
    );
  };
  export default Profile;