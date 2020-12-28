import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const DoctorContainer = styled.div`
    width: 250px;
    flex-shrink: 0;
    margin-bottom: 1.5625rem;
    align-content: center;
    text-align: center;
    margin-right: 0.9375rem;
    margin-left: 0.9375rem;
`

const DoctorImageContainer = styled.div`
    width: 100%;
    position: relative;
    overflow: hidden;
`

const DoctorNameLanguageSpecializationWrapper = styled.div`
    width: 100%;
    font-size: medium;
    flex-wrap: wrap;
    flex-shrink: 0;
    display: flex;
`

const DoctorName = styled.div`
    margin-top: 10px;
    width: 100%;
    align-content: center;
`

const Mask = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 250px;
    height: 250px;
    background-color: rgba(101, 101, 101, 0.2);
    opacity: 0;
    transition: 0.5s;
    :hover {
        opacity: 1;
    } 
`

function DoctorOfEach(props) {
    let DoctorId = props.DoctorId;
    let FirstName = props.Doctor.FirstName;
    let SecondName = props.Doctor.SecondName;
    
    const reqSvgs = require.context('./assets/img/', true, /\.jpe?g$/);
    const allSvgFilepaths = reqSvgs.keys();
    const imagePath = allSvgFilepaths[DoctorId];
    const image = reqSvgs(imagePath);
    console.log(DoctorId);

    return (
        <React.Fragment>
            <DoctorContainer>
                <Link to={`/doctors/${DoctorId}`}>
                    <DoctorImageContainer>
                        <img src={image.default} width="250" height="250"/>
                        <Mask/>
                    </DoctorImageContainer>
                </Link>
                <DoctorNameLanguageSpecializationWrapper>
                    <DoctorName>
                        {`Dr. ${FirstName} ${SecondName}`}
                    </DoctorName>
                </DoctorNameLanguageSpecializationWrapper>
                
            </DoctorContainer>

        </React.Fragment>
    )
};

export default DoctorOfEach;