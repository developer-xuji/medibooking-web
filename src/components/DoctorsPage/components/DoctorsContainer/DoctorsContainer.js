import React from 'react';
import DoctorOfEach from './components/DoctorOfEach'
import MoreButton from './components/MoreButton'
import './scss/DoctorsContainer.scss'

const MaximumNumOfDoctors = 8;

class DoctorsContainer extends React.Component {

    constructor(props){

        super(props);
        if (this.props.CurrentDoctorsList.length > MaximumNumOfDoctors) {
            this.state = {
                CurrentDoctorsShowed : this.props.CurrentDoctorsList.slice(0, MaximumNumOfDoctors),
                CurrentNumOfDoctorsShowed : MaximumNumOfDoctors,
                ifMore : true,
            };
        } else {
            this.state = {
                CurrentDoctorsShowed : this.props.CurrentDoctorsList,
                CurrentNumOfDoctorsShowed : this.props.CurrentDoctorsList.length,
                ifMore : false,
            };
        };
        console.log(this.state.CurrentDoctorsShowed);
        console.log(this.state.CurrentNumOfDoctorsShowed);
        console.log(this.props.AllDoctors);
    };


    handleMoreClick() {
        let a = 1;
    };


    render() {
        let moreButton;
        if (this.state.ifMore){
            moreButton = <MoreButton onClick={this.handleMoreClick} />;
        } else {
        }
        const renderdoctor = this.state.CurrentDoctorsShowed.map((value, index) => <DoctorOfEach DoctorId={Object.keys(this.props.AllDoctors)[index]} Doctor={this.props.AllDoctors[value]}></DoctorOfEach>)
        return(
            
            <div className="DoctorsContainer">
                {renderdoctor}
                {moreButton}
            </div>
            
        )
    }
}

export default DoctorsContainer;