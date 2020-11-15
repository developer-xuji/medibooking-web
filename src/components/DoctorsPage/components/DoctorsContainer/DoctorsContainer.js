import React from 'react';
import DoctorOfEach from './components/DoctorOfEach'
import '../scss/DoctorsContainer.css'

const MaximumNumOfDoctors = 6;

class DoctorsContainer extends React.Component {

    constructor(props){

        super(props);
        if (this.props.CurrentDoctorsList > MaximumNumOfDoctors) {
            this.state = {
                CurrentDoctorsShowed : this.props.CurrentDoctorsList.slice(0, MaximumNumOfDoctors),
                CurrentNumOfDoctorsShowed : MaximumNumOfDoctors,
                ifMore : ((this.state.CurrentNumOfDoctorsShowed === this.props.CurrentDoctorsList.length)? false : true),
            };
        } else {
            this.state = {
                CurrentDoctorsShowed : this.props.CurrentDoctorsList,
                CurrentNumOfDoctorsShowed : this.props.CurrentDoctorsList.length,
                ifMore : ((this.state.CurrentNumOfDoctorsShowed === this.props.CurrentDoctorsList.length)? false : true),
            };
        };
    };

    renderCentainDoctor(index, value) {
    
        return (
            <DoctorOfEach DoctorId={this.props.AllDoctors.keys()[index]} Doctor={this.props.AllDoctors[value]}></DoctorOfEach>
          )
       
    }

    handleMoreClick() {

    }


    render() {

        if (this.state.ifMore){
            MoreButton = <MoreButton onClick={this.handleMoreClick} />
        } else {
            MoreButton = NaN;
        }
        return(
            
            <div className="DoctorsContainer">
                {this.state.CurrentDoctorsShowed.map((index, value) => {this.RenderCentainDoctor(index, value)})}
                {MoreButton}
            </div>
            
        )
    }
}

export default DoctorsContainer;