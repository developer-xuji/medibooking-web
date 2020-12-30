import React from "react";
import styled from "styled-components";

import { MALE_ICON } from "../../../../../constants";
import { FEMALE_ICON } from "../../../../../constants";
import Tag from "../../../../DoctorInfo/components/InfoBody/TagArea/Tag" 

const Layout = styled.a`
  display: flex;
  align-items: flex-start;
  width: 100%;
  padding: 18px 4px;
  margin-bottom: 8px;

  img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    object-position: center;
    border-radius: 100%;
    margin-right: 18px;
  }

`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h4 {
    font-size: 18px;
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    color: #5b7189;
    text-align: left;
  }

  img {
    width: 20px;
    height: 20px;
    margin-left: 12px;
  }
`;

const SpecArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  span {
      margin: 8px 12px 0 0;
      padding: 2px 8px;
      background-color: rgba(91, 113, 137, 0.1);
      color: #5b7189;
  }
`

const DoctorCard = ({ id, firstName, lastName, gender, specializations }) => {
    return (
        <Layout>
            <img src={`https://medibookingbucket.s3-ap-southeast-2.amazonaws.com/DoctorsImage/IMG_${id}.jpg`} alt="doctor"></img>
            <TextArea>
                <h4>
                    {firstName} {lastName}
                    {gender === "male" ? (
                        <img src={MALE_ICON} alt="male" />
                    ) : (
                            <img src={FEMALE_ICON} alt="female" />
                        )}
                </h4>
                <SpecArea>{specializations.map((specialization) => <span key={specialization.id}>{specialization.specializationName}</span>)}</SpecArea>
            </TextArea>
        </Layout>
    );
};

export default DoctorCard;