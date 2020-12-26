import React from "react";
import styled from "styled-components";
import { DOC2_PIC } from "../../../../constants"
import { DOC_HEADER_PIC } from "../../../../constants"
import { CLINIC_INFO } from "../../../../constants"

const Layout = styled.div`
  width: 100%;
  background:linear-gradient(0deg, rgba(0, 143, 180, 0.8), rgba(0, 143, 180, 0.8)), url(${DOC_HEADER_PIC});
  background-size: cover;
  min-height: 260px;
  padding: 48px 24px;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  border-bottom: 5px solid #5b7189;
  position: relative;

  img {
      width: 150px;
      height: 150px;
      object-fit: cover;
      object-position: center;
      border-radius: 100%;
      border: 8px solid rgba(255, 255, 255, 0.75);
      margin-left: 100px;
      margin-right: 50px;
  }

  button {
    border: none;
    padding: 16px 32px;
    background-color: #5b7189;
    font-weight: bold;
    border-radius: 8px;
    position: absolute;
    right: 5%; 
    top: 60%;
    a {
      color: #fff;
    }

    &:hover {
        background-color: transparent;
        border: 1px solid #5b7189;
        cursor: pointer;
        a {
          color: #5b7189;
        }
      }
  }

`

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  font-family: "Open Sans", sans-serif;
  display: flex;
  align-items: flex-start;

  h1 {
    color: white;
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    font-size: 40px;
    margin: 8px 0 24px 0;
}

  p {
      font-size: 18px;
      margin: 4px 0;
  }
`

const InfoHeader = ({ name }) => {
  return <Layout>
    <img src={DOC2_PIC} alt="doctor" />
    <TextArea>
      <h1>Dr {name}</h1>
      <p>Address: {CLINIC_INFO.address}</p>
      <p>Phone: {CLINIC_INFO.phone}</p>
    </TextArea>
    <button><a>Booking</a></button>
  </Layout>
}

export default InfoHeader