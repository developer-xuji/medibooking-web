import React from "react";
import styled from "styled-components";
import "./scss/DoctorsSearchBar.scss";
import image from "./assets/img/background_doctor.jpg";

class DoctorsSearchBar extends React.Component {
  // constructor(props){

  //     super(props);
  //     this.state = {
  //         AllDoctors : allDoctors,
  //         CurrentDoctorsList : Object.keys(allDoctors),
  //     };
  //     // this.OnCityListClick = this.OnCityListClick.bind(this);
  // }

  render() {
    return (
      <div className="Banner">
        <div className="BannerContainer">
          <div className="SearchBarTextWraper">
            <div className="SearchBarTextContainer">
              <div className="SearchTextContainer">
                <h2>Our Doctors</h2>
                <p>
                  Medical One GP's are dedicated to providing you the best
                  possible care. On this page you can find a GP by name, gender,
                  location, languages spoken or medial interest.
                </p>
              </div>
              <div className="SearchBarContainer">
                <form onSubmit={this.props.handleSubmit}>
                  <input
                    className="SearchBar"
                    placeholder="Enter doctor's name"
                    type="text"
                    name="doctor-name"
                    size="60"
                    maxlength="128"
                    onChange={this.props.handleChange}
                  ></input>
                  <input
                    className="SubmitButton"
                    type="submit"
                    value="Submit"
                  ></input>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DoctorsSearchBar;
