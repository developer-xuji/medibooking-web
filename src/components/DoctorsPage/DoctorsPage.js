import React from 'react';
import Navigation from '../Navigation';
import styled from 'styled-components';
import DoctorsContainer from './components/DoctorsContainer'
import './index.css'

const Debug = styled.div`
    background-color: black;
`;

const allDoctors = {
    "0" : {
        FirstName: "abc",
        SecondName: "def",
        Specialization: "dental",
        Language: "English",
    },
    "1" : {
        FirstName: "abc",
        SecondName: "def",
        Specialization: "dental",
        Language: "English",
    },
    "2" : {
        FirstName: "abc",
        SecondName: "def",
        Specialization: "dental",
        Language: "English",
    },
    "3" : {
        FirstName: "abc",
        SecondName: "def",
        Specialization: "dental",
        Language: "English",
    },
    "4" : {
        FirstName: "abc",
        SecondName: "def",
        Specialization: "dental",
        Language: "English",
    },
    "5" : {
        FirstName: "abc",
        SecondName: "def",
        Specialization: "dental",
        Language: "English",
    },
    "6" : {
        FirstName: "abc",
        SecondName: "def",
        Specialization: "dental",
        Language: "English",
    },
    "7" : {
        FirstName: "abc",
        SecondName: "def",
        Specialization: "dental",
        Language: "English",
    },
    "8" : {
        FirstName: "abc",
        SecondName: "def",
        Specialization: "dental",
        Language: "English",
    },
    "9" : {
        FirstName: "abc",
        SecondName: "def",
        Specialization: "dental",
        Language: "English",
    },
    "10" : {
        FirstName: "abc",
        SecondName: "def",
        Specialization: "dental",
        Language: "English",
    },
    "11" : {
        FirstName: "abc",
        SecondName: "def",
        Specialization: "dental",
        Language: "English",
    },
    "12" : {
        FirstName: "abc",
        SecondName: "def",
        Specialization: "dental",
        Language: "English",
    },
    "13" : {
        FirstName: "abc",
        SecondName: "def",
        Specialization: "dental",
        Language: "English",
    },
    "14" : {
        FirstName: "abc",
        SecondName: "def",
        Specialization: "dental",
        Language: "English",
    },
    "15" : {
        FirstName: "abc",
        SecondName: "def",
        Specialization: "dental",
        Language: "English",
    },
    "16" : {
        FirstName: "abc",
        SecondName: "def",
        Specialization: "dental",
        Language: "English",
    },
    "17" : {
        FirstName: "abc",
        SecondName: "def",
        Specialization: "dental",
        Language: "English",
    },
    "18" : {
        FirstName: "abc",
        SecondName: "def",
        Specialization: "dental",
        Language: "English",
    },
    "19" : {
        FirstName: "abc",
        SecondName: "def",
        Specialization: "dental",
        Language: "English",
    },
    "20" : {
        FirstName: "abc",
        SecondName: "def",
        Specialization: "dental",
        Language: "English",
    },
    "21" : {
        FirstName: "abc",
        SecondName: "def",
        Specialization: "dental",
        Language: "English",
    },
    "22" : {
        FirstName: "abc",
        SecondName: "def",
        Specialization: "dental",
        Language: "English",
    },
    "23" : {
        FirstName: "abc",
        SecondName: "def",
        Specialization: "dental",
        Language: "English",
    },
};


class DoctorsPage extends React.Component {

    constructor(props){

        super(props);
        this.state = {
            AllDoctors : allDoctors,
            CurrentDoctorsList : Object.keys(allDoctors),
        };
        // this.OnCityListClick = this.OnCityListClick.bind(this);
    }

    render() {
        return (
            <React.Fragment>

                <Navigation />

                <DoctorsContainer AllDoctors={this.state.AllDoctors} CurrentDoctorsList={this.state.CurrentDoctorsList}/>

            </React.Fragment>
        )
    }
}

export default DoctorsPage;