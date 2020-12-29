import React from "react";
import styled from "styled-components";

import TagArea from "./TagArea"
import MapArea from "./MapArea"
import { THEME_COLOR } from "../../../../constants"
import { ADDRESS_ICON } from "../../../../constants"
import { PHONE_ICON } from "../../../../constants"
import { EMAIL_ICON } from "../../../../constants"
import { OPEN_ICON } from "../../../../constants"
import { CLINIC_INFO } from "../../../../constants"

const Layout = styled.div`
  margin: 12px;
  width: 70%;
  text-align: left;
  padding: 12px 48px 12px 100px;

  h1 {
    color: #5b7189;
    margin: 24px 0;
  }

  p {
    font-size: 18px;
    color: grey;
    line-height: 1.7;
    font-family: "Open Sans", sans-serif;
  }

  img {
    width: 30px;
    height: 30px;
    margin-right: 18px;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    padding: 12px;
  }
`
const PracInfoArea = styled.div`
`


const InfoBody = ({ description, languages, specializations }) => {
  return <Layout>
    <h1>Overview</h1>
    <p>{description} {description} {description} {description} {description}</p>
    <TagArea title="Languages" items={languages.map((language) => language.languageName)} color="#aecc54" />
    <TagArea title="Specialization" items={specializations.map((specialization) => specialization.specializationName)} color={THEME_COLOR} />
    <h1>Practice Information</h1>
    <p><img src={ADDRESS_ICON} alt="address" />{CLINIC_INFO.address}</p>
    <p><img src={PHONE_ICON} alt="phone" />{CLINIC_INFO.phone}</p>
    <p><img src={EMAIL_ICON} alt="email" />{CLINIC_INFO.email}</p>
    <p><img src={OPEN_ICON} alt="open" />{CLINIC_INFO.openTime}</p>
    <MapArea />
  </Layout>
}

export default InfoBody