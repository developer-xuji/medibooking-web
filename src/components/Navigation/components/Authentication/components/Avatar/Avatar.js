import styled from "styled-components";
import { AVATAR_ICON } from "../../../../../../constants";
const role = localStorage.getItem("ROLE");
const doctorId = localStorage.getItem("USER_ID");
const AVATAR_ICON_URL =
  role && role === "ROLE_PATIENT"
    ? AVATAR_ICON
    : `https://medibookingbucket.s3-ap-southeast-2.amazonaws.com/DoctorsImage/IMG_${doctorId}.jpg`;
console.log("doctorId", doctorId);

// const { userId } = this.props;

const Avatar = styled.div`
  background: url(${AVATAR_ICON_URL});
  background-size: cover;
  border-radius: 30px;
  height: 50px;
  width: 50px;
`;

export default Avatar;
