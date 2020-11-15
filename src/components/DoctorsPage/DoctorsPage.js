import React from 'react';
import Navigation from '../Navigation';
import styled from 'styled-components';
import DoctorsContainer from './components/DoctorsContainer'
import './index.css'

const Debug = styled.div`
    background-color: black;
`;

class DoctorsPage extends React.Component {

    constructor(props){

        super(props);
        this.state = {
            AllDoctors :{
                "0" : {
                    FisrtName: "abc",
                    SecondName: "def",
                    Specialization: "dental",
                    Language: "English",
                },
                "1" : {
                    FisrtName: "abc",
                    SecondName: "def",
                    Specialization: "dental",
                    Language: "English",
                },
                "2" : {
                    FisrtName: "abc",
                    SecondName: "def",
                    Specialization: "dental",
                    Language: "English",
                },
                "3" : {
                    FisrtName: "abc",
                    SecondName: "def",
                    Specialization: "dental",
                    Language: "English",
                },
                "4" : {
                    FisrtName: "abc",
                    SecondName: "def",
                    Specialization: "dental",
                    Language: "English",
                },
                "5" : {
                    FisrtName: "abc",
                    SecondName: "def",
                    Specialization: "dental",
                    Language: "English",
                },
                "6" : {
                    FisrtName: "abc",
                    SecondName: "def",
                    Specialization: "dental",
                    Language: "English",
                },
                "7" : {
                    FisrtName: "abc",
                    SecondName: "def",
                    Specialization: "dental",
                    Language: "English",
                },
                "8" : {
                    FisrtName: "abc",
                    SecondName: "def",
                    Specialization: "dental",
                    Language: "English",
                },
                "9" : {
                    FisrtName: "abc",
                    SecondName: "def",
                    Specialization: "dental",
                    Language: "English",
                },
                "10" : {
                    FisrtName: "abc",
                    SecondName: "def",
                    Specialization: "dental",
                    Language: "English",
                },
            },
            CurrentDoctorsList : Doctors.keys(),

        };
        this.OnCityListClick = this.OnCityListClick.bind(this);
    }

    render() {
        <React.Fragment>
            <Debug>
                <Navigation />
            </Debug>
            <Debug>
                <DoctorsContainer />
            </Debug>
        </React.Fragment>
    }
}

export default DoctorsPage;