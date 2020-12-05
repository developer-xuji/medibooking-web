import React from "react";
import styled from "styled-components";
import DoctorsContainer from "./components/DoctorsContainer";
import DoctorsSearchBar from "./components/DoctorsSearchBar";
import "./index.css";

const Debug = styled.div`
  background-color: black;
`;

const MaximumNumOfDoctorsToShow = 8;

const allDoctors = {
  0: {
    FirstName: "123",
    SecondName: "ggg",
    Specialization: "dental",
    Language: "English",
  },
  1: {
    FirstName: "456",
    SecondName: "hhh",
    Specialization: "dental",
    Language: "English",
  },
  2: {
    FirstName: "789",
    SecondName: "ggg",
    Specialization: "dental",
    Language: "English",
  },
  3: {
    FirstName: "abc",
    SecondName: "def",
    Specialization: "dental",
    Language: "English",
  },
  4: {
    FirstName: "abc",
    SecondName: "def",
    Specialization: "dental",
    Language: "English",
  },
  5: {
    FirstName: "abc",
    SecondName: "def",
    Specialization: "dental",
    Language: "English",
  },
  6: {
    FirstName: "abc",
    SecondName: "def",
    Specialization: "dental",
    Language: "English",
  },
  7: {
    FirstName: "abc",
    SecondName: "def",
    Specialization: "dental",
    Language: "English",
  },
  8: {
    FirstName: "abc",
    SecondName: "def",
    Specialization: "dental",
    Language: "English",
  },
  9: {
    FirstName: "abc",
    SecondName: "def",
    Specialization: "dental",
    Language: "English",
  },
  10: {
    FirstName: "abc",
    SecondName: "def",
    Specialization: "dental",
    Language: "English",
  },
  11: {
    FirstName: "abc",
    SecondName: "def",
    Specialization: "dental",
    Language: "English",
  },
  12: {
    FirstName: "abc",
    SecondName: "def",
    Specialization: "dental",
    Language: "English",
  },
  13: {
    FirstName: "abc",
    SecondName: "def",
    Specialization: "dental",
    Language: "English",
  },
  14: {
    FirstName: "abc",
    SecondName: "def",
    Specialization: "dental",
    Language: "English",
  },
  15: {
    FirstName: "abc",
    SecondName: "def",
    Specialization: "dental",
    Language: "English",
  },
  16: {
    FirstName: "abc",
    SecondName: "def",
    Specialization: "dental",
    Language: "English",
  },
  17: {
    FirstName: "abc",
    SecondName: "def",
    Specialization: "dental",
    Language: "English",
  },
  18: {
    FirstName: "abc",
    SecondName: "def",
    Specialization: "dental",
    Language: "English",
  },
  19: {
    FirstName: "abc",
    SecondName: "def",
    Specialization: "dental",
    Language: "English",
  },
  20: {
    FirstName: "abc",
    SecondName: "def",
    Specialization: "dental",
    Language: "English",
  },
  21: {
    FirstName: "abc",
    SecondName: "def",
    Specialization: "dental",
    Language: "English",
  },
  22: {
    FirstName: "abc",
    SecondName: "def",
    Specialization: "dental",
    Language: "English",
  },
  23: {
    FirstName: "abc",
    SecondName: "def",
    Specialization: "dental",
    Language: "English",
  },
  24: {
    FirstName: "abc",
    SecondName: "def",
    Specialization: "dental",
    Language: "English",
  },
  25: {
    FirstName: "abc",
    SecondName: "def",
    Specialization: "dental",
    Language: "English",
  },
};
const allDoctorsList = Object.keys(allDoctors);

class DoctorsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      AllDoctors: allDoctors,
      CurrentDoctorsList: Object.keys(allDoctors),
      CurrentNumOfDoctorsShowed: MaximumNumOfDoctorsToShow,
      SearchText: NaN,
      IfMore: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleMoreClick = this.handleMoreClick.bind(this);
  }

  handleMoreClick() {
    // console.log(this.state.CurrentNumOfDoctorsShowed);
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
    let TempList = [];
    for (let i = 0; i < allDoctorsList.length; i++) {
      if (
        allDoctors[allDoctorsList[i]].FirstName.includes(
          this.state.SearchText
        ) ||
        allDoctors[allDoctorsList[i]].SecondName.includes(this.state.SearchText)
      ) {
        TempList.push(allDoctorsList[i]);
      }
    }
    console.log(TempList);
    if (TempList.length > MaximumNumOfDoctorsToShow) {
      this.setState({
        CurrentDoctorsList: TempList,
        IfMore: true,
      });
    } else {
      this.setState({
        CurrentDoctorsList: TempList,
        IfMore: false,
      });
    }
  }

  handleChange(event) {
    // let TempList = [];
    // for (let i = 0; i < allDoctorsList.length; i++){
    //     if (allDoctors[allDoctorsList[i]].FirstName.includes(event.target.value) || allDoctors[allDoctorsList[i]].SecondName.includes(event.target.value)) {
    //         TempList.push(allDoctorsList[i]);
    //     }
    // }
    // console.log(TempList);
    this.setState({
      // CurrentDoctorsList : TempList,
      SearchText: event.target.value,
    });
    // console.log(this.state.CurrentDoctorsList);
  }

  render() {
    console.log(this.state.CurrentDoctorsList);
    return (
      <React.Fragment>
        <DoctorsSearchBar
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
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

export default DoctorsPage;
