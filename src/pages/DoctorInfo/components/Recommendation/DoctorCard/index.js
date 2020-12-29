import React from "react";
import styled from "styled-components";

import { DOC1_PIC } from "../../../../../constants";
import { MALE_ICON } from "../../../../../constants";
import { FEMALE_ICON } from "../../../../../constants";

const Layout = styled.a`
  display: flex;
  align-items: flex-start;
  background-color: #f6f6f6;
  width: 100%;
  margin: 16px 12px 0px 0px;
  padding: 12px 18px;
  transition: all 0.2s ease-in-out;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    object-position: center;
    border-radius: 100%;
    margin-right: 18px;
  }

  @media screen and (max-width: 900px) {
    max-width: 400px;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.1, 1.1);
  }
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;

  h3 {
    font-size: 18px;
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    color: #5b7189;
    text-align: left;
  }

  img {
    width: 20px;
    height: 20px;
  }
`;

const DoctorCard = ({ id, firstName, lastName, gender }) => {
  return (
    <Layout href={"/doctors/" + id}>
      <img src={DOC1_PIC} alt="doctor"></img>
      <TextArea>
        <h3>
          {firstName} {lastName}
        </h3>
        {gender === "male" ? (
          <img src={MALE_ICON} alt="male" />
        ) : (
          <img src={FEMALE_ICON} alt="female" />
        )}
      </TextArea>
    </Layout>
  );
};

export default DoctorCard;
