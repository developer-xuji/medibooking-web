import React from 'react';
import styled from 'styled-components';
import BookingDetails from './components/BookingDetails';
import TimeSelector from './components/TimeSelector';
import DoctorSelector from './components/DoctorSelector';
import DateSelector from './components/DateSelector';

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    align-items: center;
    margin: 0 auto;
    border-radius: 15px;
    box-shadow: 0px 3px 30px 0px rgba(0, 0, 0, 0.3);
    height:600px;
`;

const SelectArea = styled.div`
    overflow-y: auto;
    width: 100%;
    border-radius: 0 0 0 15px;
    padding: 0 20px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Section = styled.div`
    width: 100%;
    &~& {
        margin: 20px 0;
    }
`;

const DOCTORS = [
    {
        name: 'Tom',
    },
    {
        name: 'Jack',
    },
    {
        name: 'Steven',
    },
    {
        name: 'Peter',
    },
  ];

class BookingPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            Doctor: 'Tom',
            Date: '2020-12-01',
            Time: '09:00'
        }
        this.handleBookingClick = this.handleBookingClick.bind(this);
        this.handleTimeSelector = this.handleTimeSelector.bind(this);
        this.handleDoctorSelector = this.handleDoctorSelector.bind(this);
        this.handleDateSelector = this.handleDateSelector.bind(this);
    }

    handleBookingClick() {
        this.props.history.push('/doctors');
        console.log(this.props.history);
    }

    handleTimeSelector(key) {
        return (value) => {
            this.setState({
                [key]: value.format('HH:mm')
            });
        }
    }

    handleDoctorSelector(key){
        return (event) =>{
            this.setState({
                [key]: event.target.value
            });
        }
    }

    handleDateSelector(key){
        return (value) => {
            this.setState({
                [key]: value.format('YYYY-MM-DD')
            })
        }
    }

    render () {
        const {Doctor, Date, Time} = this.state;
        const SELECTORS = [{
            key: 'time_selector',
            selector: (<TimeSelector 
                title='Select Time ' 
                onSelect={this.handleTimeSelector('Time')}
            />)
        },{
            key: 'date_selector', 
            selector: (<DateSelector
                title='Select Date' 
                onSelect={this.handleDateSelector('Date')}
            />)
        },{
            key: 'doctor_selector',
            selector:(<DoctorSelector 
                title='Select Doctor'
                doctors={DOCTORS}
                selected={Doctor}
                onSelect={this.handleDoctorSelector('Doctor')}
            />) 
        }]
        return (
            <Layout>  
                <BookingDetails
                    doctor={Doctor} 
                    date={Date} 
                    time={Time} 
                    onBooingClick={this.handleBookingClick}
                />
                <SelectArea>
                    {SELECTORS.map((s) => (
                        <Section>
                            {s.selector}
                        </Section>
                    ))}
                </SelectArea>
            </Layout>
        )
    }
}

export default BookingPage;