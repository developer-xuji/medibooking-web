import React from "react";
import styled, { keyframes } from "styled-components";
import DoctorsContainer from "./components/DoctorsContainer";
import DoctorsSearchBar from "./components/DoctorsSearchBar";
import DoctorsFilter from "./components/DoctorsFilter";
import getDoctors from "../../utils/getDoctors"

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const DivLoader = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`

const SvgLoader = styled.svg`
  animation-name: ${spinAnimation};
  animation-timing-function: linear;
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
  margin: auto;
`

let Loading = true;
const MaximumNumOfDoctorsToShow = 8;
let allDoctors = {}
let allDoctorsList = Object.keys(allDoctors);

const B2F = (doctorObject) => {
  console.log(doctorObject);
  let returnedDoctorObject = {};
  for (let i = 0; i < doctorObject.length; i++){
    let SpecializationList = [];
    let LanguageList = [];
    doctorObject[i].specializations.map((specialization) => {
      SpecializationList.push(specialization.specializationName);
    });
    doctorObject[i].languages.map((language) => {
      LanguageList.push(language.languageName);
    });
    returnedDoctorObject[doctorObject[i].id] = {
      FirstName: doctorObject[i].firstName,
      SecondName: doctorObject[i].lastName,
      Age: doctorObject[i].age,
      Gender: doctorObject[i].gender,
      Description: doctorObject[i].description,
      Specialization: SpecializationList,
      Language: LanguageList,
    }
  }
  return returnedDoctorObject;
};

const SelectDoctors = (specialization, language, allDoctors, allDoctorsList) => {
  let ReturnedDoctorsList = [];
  if (specialization === undefined){
      if (language !== undefined) {
          for (let i = 0; i < allDoctorsList.length; i++) {
          if (
              allDoctors[allDoctorsList[i]].Language.indexOf(language) !== -1
          ) {
              ReturnedDoctorsList.push(allDoctorsList[i]);
          }
          }
      } else {
          ReturnedDoctorsList = Object.keys(allDoctors);
      }
  }
  else{
      if (language !== undefined) {
          for (let i = 0; i < allDoctorsList.length; i++) {
              if (
                allDoctors[allDoctorsList[i]].Specialization.indexOf(specialization) !== -1 &&
                allDoctors[allDoctorsList[i]].Language.indexOf(language) !== -1
              ) {
                ReturnedDoctorsList.push(allDoctorsList[i]);
              }
          }
      }
      else{
          for (let i = 0; i < allDoctorsList.length; i++) {
              if (
                  allDoctors[allDoctorsList[i]].Specialization.indexOf(specialization) !== -1
              ) {
              ReturnedDoctorsList.push(allDoctorsList[i]);
              }
          }
      }
  }
  return ReturnedDoctorsList;
};


class DoctorsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      AllDoctors: allDoctors,
      CurrentDoctorsList: Object.keys(allDoctors),
      CurrentNumOfDoctorsShowed: MaximumNumOfDoctorsToShow,
      SearchText: NaN,
      IfMore: true,
      SpecializationSelected: undefined,
      LanguageSelected: undefined,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleMoreClick = this.handleMoreClick.bind(this);
    this.handleSpecializationChange = this.handleSpecializationChange.bind(
      this
    );
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
    this.SetCurrentNumOfDoctorsShowed = this.SetCurrentNumOfDoctorsShowed.bind(this);
  }
  
  SetCurrentNumOfDoctorsShowed(DoctorsList){
    if (DoctorsList.length > MaximumNumOfDoctorsToShow) {
      this.setState({
        CurrentDoctorsList: DoctorsList,
        CurrentNumOfDoctorsShowed: MaximumNumOfDoctorsToShow,
        IfMore: true,
      });
    } else {
      this.setState({
        CurrentDoctorsList: DoctorsList,
        CurrentNumOfDoctorsShowed: DoctorsList.length,
        IfMore: false,
      });
    }
  }

  handleMoreClick() {
    if (
      this.state.CurrentDoctorsList.length -
        this.state.CurrentNumOfDoctorsShowed >
      4
    ) {
      this.setState({
        CurrentNumOfDoctorsShowed: this.state.CurrentNumOfDoctorsShowed + 4,
        IfMore: true,
      });
    } else {
      this.setState({
        CurrentNumOfDoctorsShowed: this.state.CurrentDoctorsList.length,
        IfMore: false,
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    let ReturnedDoctorsList = [];
    for (let i = 0; i < allDoctorsList.length; i++) {
      if (
        allDoctors[allDoctorsList[i]].FirstName.includes(
          this.state.SearchText
        ) ||
        allDoctors[allDoctorsList[i]].SecondName.includes(this.state.SearchText)
      ) {
        ReturnedDoctorsList.push(allDoctorsList[i]);
      }
    }
    console.log(ReturnedDoctorsList);
    if (ReturnedDoctorsList.length > MaximumNumOfDoctorsToShow) {
      this.setState({
        CurrentDoctorsList: ReturnedDoctorsList,
        CurrentNumOfDoctorsShowed: MaximumNumOfDoctorsToShow,
        IfMore: true,
      });
    } else {
      this.setState({
        CurrentDoctorsList: ReturnedDoctorsList,
        CurrentNumOfDoctorsShowed: MaximumNumOfDoctorsToShow,
        IfMore: false,
      });
    }
  }

  handleChange(event) {
    this.setState({
      SearchText: event.target.value,
    });
  }

  handleSpecializationChange(event) {
    if (event === "AllSpecialization") {
      this.setState({
        SpecializationSelected: undefined,
      });
      let ReturnedDoctorsList = SelectDoctors(undefined, this.state.LanguageSelected, allDoctors, allDoctorsList);
      this.SetCurrentNumOfDoctorsShowed(ReturnedDoctorsList);
    } else {
      this.setState({
        SpecializationSelected: event,
      });
      let ReturnedDoctorsList = SelectDoctors(event, this.state.LanguageSelected, allDoctors, allDoctorsList);
      this.SetCurrentNumOfDoctorsShowed(ReturnedDoctorsList);
    }
  }

  handleLanguageChange(event) {
    if (event === "AllLanguage") {
      this.setState({
        LanguageSelected: undefined,
      });
      let ReturnedDoctorsList = SelectDoctors(this.state.SpecializationSelected, undefined, allDoctors, allDoctorsList);
      this.SetCurrentNumOfDoctorsShowed(ReturnedDoctorsList);
    } else {
      this.setState({
        LanguageSelected: event,
      });
      let ReturnedDoctorsList = SelectDoctors(this.state.SpecializationSelected, event, allDoctors, allDoctorsList);
      this.SetCurrentNumOfDoctorsShowed(ReturnedDoctorsList);
    }
  }

  componentDidMount() {
    Loading = false;
    getDoctors()
     .then((data) => {
        console.log(data);
        allDoctors = B2F(data);
        allDoctorsList = Object.keys(allDoctors);
        this.setState({
          AllDoctors: allDoctors,
          CurrentDoctorsList: allDoctorsList,
        });
      })
  }

  render() {
    console.log(this.state.CurrentDoctorsList);
    if (Loading === true) {
      return (
          <DivLoader>
            <SvgLoader viewBox="0 0 100 100" width="10em" height="10em">
              <path ng-attr-d="{{config.pathCmd}}" ng-attr-fill="{{config.color}}" stroke="none" d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#51CACC" transform="rotate(179.719 50 51)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 51;360 50 51" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform></path>
            </SvgLoader>
          </DivLoader>
      );
    }
    else {
      return (
        <React.Fragment>
          <DoctorsSearchBar
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
          <DoctorsFilter
            handleSpecializationChange={this.handleSpecializationChange}
            handleLanguageChange={this.handleLanguageChange}
          />
          <DoctorsContainer
            AllDoctors={this.state.AllDoctors}
            CurrentDoctorsList={this.state.CurrentDoctorsList}
            CurrentNumOfDoctorsShowed={this.state.CurrentNumOfDoctorsShowed}
            handleMoreClick={this.handleMoreClick}
            IfMore={this.state.IfMore}
          />
        </React.Fragment>
      );
    }

  }
}

export default DoctorsPage;
