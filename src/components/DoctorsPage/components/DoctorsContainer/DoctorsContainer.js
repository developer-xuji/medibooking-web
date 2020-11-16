import React from 'react';
import DoctorOfEach from './components/DoctorOfEach'
import MoreButton from './components/MoreButton'
import './scss/DoctorsContainer.scss'


class DoctorsContainer extends React.Component {


    render() {

        let moreButton;
        console.log(this.props.IfMore);
        if (this.props.IfMore){
            moreButton = <MoreButton onMoreButtonClick={() => {this.props.handleMoreClick()}}/>;
        }
        const renderdoctor = this.props.CurrentDoctorsList.slice(0, this.props.CurrentNumOfDoctorsShowed).map((value, index) => <DoctorOfEach DoctorId={value} Doctor={this.props.AllDoctors[value]}></DoctorOfEach>)
        return(
            <div className="DoctorsContainerWraper">
                <div className="DoctorsContainer">
                    {renderdoctor}
                    {moreButton}
                </div>
            </div>
        )
    }
}

export default DoctorsContainer;