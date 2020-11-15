import React from 'react';
import './scss/DoctorOfEach.scss'
import image from './assets/img/IMG_1.jpg'

function DoctorOfEach(props) {
    let DoctorId = props.DoctorId;
    let FirstName = props.Doctor.FirstName;
    let SecondName = props.Doctor.SecondName;
    let Language = props.Doctor.Language;
    let Specialization = props.Doctor.Specialization;

    return (
        <React.Fragment>
            <div className="DoctorContainer">
                <div className="DoctorImageContainer">
                    <img src={image} width="250" height="250"/>
                </div>
                <div className="DoctorNameLanguageSpecializationWrapper">
                    <div className="DoctorName">
                        {`Dr. ${FirstName} ${SecondName}`}
                    </div>
                    <div className="DoctorLanguage">
                        {`${Language}`}
                    </div>
                    <div className="DoctorSpecialization">
                        {`${Specialization}`}
                    </div>
                </div>
                
            </div>

        </React.Fragment>
    )
};

export default DoctorOfEach;