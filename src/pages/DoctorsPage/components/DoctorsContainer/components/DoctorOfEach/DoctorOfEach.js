import React from "react";
import "./scss/DoctorOfEach.scss";
// import image from './assets/img/IMG_1.jpg'

function DoctorOfEach(props) {
  let DoctorId = props.DoctorId;
  let FirstName = props.Doctor.FirstName;
  let SecondName = props.Doctor.SecondName;
  let Language = props.Doctor.Language;
  let Specialization = props.Doctor.Specialization;
  // const ImgURL = require('./assets/img/IMG_'+ DoctorId + '.jpg')

  const reqSvgs = require.context("./assets/img/", true, /\.jpe?g$/);
  const allSvgFilepaths = reqSvgs.keys();
  const imagePath = allSvgFilepaths[DoctorId];
  const image = reqSvgs(imagePath);
  console.log(DoctorId);

  return (
    <React.Fragment>
      <div className="DoctorContainer">
        <div className="DoctorImageContainer">
          <img src={image.default} width="250" height="250" />
        </div>
        <div className="DoctorNameLanguageSpecializationWrapper">
          <div className="DoctorName">{`Dr. ${FirstName} ${SecondName}`}</div>
          <div className="DoctorLanguage">{`${Language}`}</div>
          <div className="DoctorSpecialization">{`${Specialization}`}</div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default DoctorOfEach;
