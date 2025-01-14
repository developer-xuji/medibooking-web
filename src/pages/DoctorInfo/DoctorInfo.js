import React from "react";
import styled, { keyframes } from "styled-components";
import InfoHeader from "./components/InfoHeader";
import InfoBody from "./components/InfoBody";
import Recommendation from "./components/Recommendation";

import { connect } from "react-redux";
import { loadDoctor } from "../../actions/doctor";

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const DivLoader = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const SvgLoader = styled.svg`
  animation-name: ${spinAnimation};
  animation-timing-function: linear;
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
  margin: auto;
`;

const Container = styled.div`
  font-family: MessinaSansWeb, Source Sans Pro, sans-serif;
  background: #fff;
  box-shadow: 0 1px 10px rgba(92, 119, 131, 0.15);
  border-radius: 4px;
  text-align: center;
`;

const BodyContainer = styled.div`
  display: flex;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export class DoctorInfo extends React.Component {
  componentDidMount() {
    const { loadDoctor } = this.props;
    loadDoctor(this.props.match.params.DoctorsID);
  }

  render() {
    const { loading, doctor } = this.props;
    if (loading) {
      return (
        <DivLoader>
          <SvgLoader viewBox="0 0 100 100" width="10em" height="10em">
            <path
              ng-attr-d="{{config.pathCmd}}"
              ng-attr-fill="{{config.color}}"
              stroke="none"
              d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50"
              fill="#51CACC"
              transform="rotate(179.719 50 51)"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                calcMode="linear"
                values="0 50 51;360 50 51"
                keyTimes="0;1"
                dur="1s"
                begin="0s"
                repeatCount="indefinite"
              ></animateTransform>
            </path>
          </SvgLoader>
        </DivLoader>
      );
    } else {
      return (
        <Container>
          <InfoHeader
            id={doctor.id}
            name={doctor.firstName + " " + doctor.lastName}
            gender={doctor.gender}
          />
          <BodyContainer>
            <InfoBody
              description={doctor.description}
              languages={doctor.languages}
              specializations={doctor.specializations}
            />
            <Recommendation
              doctorID={doctor.id}
              specializationID={doctor.specializations[0].id}
            />
          </BodyContainer>
        </Container>
      );
    }
  }
}

const mapStateToProps = (state) => {
  const {
    doctor: { loading, doctor },
  } = state;
  return {
    loading,
    doctor,
  };
};

const mapActionsToProps = {
  loadDoctor,
};

export default connect(mapStateToProps, mapActionsToProps)(DoctorInfo);
