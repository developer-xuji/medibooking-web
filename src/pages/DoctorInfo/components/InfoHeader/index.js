import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { DOC2_PIC } from "../../../../constants";
import { DOC_HEADER_PIC } from "../../../../constants";
import { CLINIC_INFO } from "../../../../constants";
import { MALE_ICON } from "../../../../constants";
import { FEMALE_ICON } from "../../../../constants";

const Layout = styled.div`
  width: 100%;
  background: linear-gradient(
      0deg,
      rgba(0, 143, 180, 0.8),
      rgba(0, 143, 180, 0.8)
    ),
    url(${DOC_HEADER_PIC});
  background-size: cover;
  min-height: 260px;
  padding: 48px 24px;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  border-bottom: 5px solid #5b7189;
  position: relative;

  button {
    border: none;
    padding: 16px 32px;
    background-color: #5b7189;
    font-weight: bold;
    border-radius: 8px;
    position: absolute;
    right: 5%;
    top: 60%;
    color: #fff;

    &:hover {
      background-color: transparent;
      border: 1px solid #5b7189;
      cursor: pointer;
      color: #5b7189;
    }
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;

    img {
      margin-left: 0px;
      margin-right: 0px;
    }

    button {
      position: relative;
      margin-top: 12px;
      right: auto;
    }
  }
`;
const DoctorPic = styled.div`
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

  @media screen and (max-width: 900px) {
    img {
      margin-left: 0px;
      margin-right: 0px;
    }
  }
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  font-family: "Open Sans", sans-serif;
  display: flex;
  align-items: flex-start;

  @media screen and (max-width: 900px) {
    align-items: center;
    margin-top: 12px;
  }

  h1 {
    color: white;
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    font-size: 40px;
    margin: 8px 0 24px 0;

    img {
      width: 30px;
      height: 30px;
      margin-left: 12px;
    }
  }

  p {
    font-size: 18px;
    margin: 4px 0;
  }
`;

const InfoHeader = ({ id, name, gender }) => {
  const booking_url = "/booking/" + id;
  return (
    <Layout>
      <DoctorPic>
        <img src={DOC2_PIC} alt="doctor" />
      </DoctorPic>
      <TextArea>
        <h1>
          Dr {name}
          {gender === "male" ? (
            <img src={MALE_ICON} alt="male" />
          ) : (
            <img src={FEMALE_ICON} alt="female" />
          )}
        </h1>
        <p>Address: {CLINIC_INFO.address}</p>
        <p>Phone: {CLINIC_INFO.phone}</p>
      </TextArea>
      <Link to={booking_url}>
        <button>Booking</button>
      </Link>
    </Layout>
  );
};

export default InfoHeader;
