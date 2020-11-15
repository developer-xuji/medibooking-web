import React from 'react';
import '../scss/DoctorOfEach.css'

function DoctorOfEach(props) {
    let DoctorId = props.DoctorId;
    let FirstName = props.Doctor.FirstName;
    let SecondName = props.Doctor.SecondName;
    let Language = props.Doctor.Language;
    let Specialization = props.Doctor.Specialization;
    let BackgroundImageStyle = {
        backgroundImage: `url(../assets/img/IMG_${DoctorId}.jpg)` 
    }
    return (
        <React.Fragment>
            <div className="DoctorContainer">
                <div className="DoctorImage" style={BackgroundImageStyle}>
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