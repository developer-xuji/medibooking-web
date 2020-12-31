import React from 'react';
import { shallow } from 'enzyme';
import DoctorsContainer from './DoctorsContainer';
import MoreButton from './components/MoreButton';

const CurrentDoctorsListEmpty = [];

describe('<DoctorsContainer />', () => {
    it('renders if IfMore is true', () => {
        const wrapper = shallow(<DoctorsContainer 
        IfMore={true}
        CurrentDoctorsList={CurrentDoctorsListEmpty}/>);

        expect(wrapper.find(MoreButton)).toHaveLength(1);
    });

    it('renders if IfMore is false', () => {
        const wrapper = shallow(<DoctorsContainer 
        IfMore={false}
        CurrentDoctorsList={CurrentDoctorsListEmpty}/>);

        expect(wrapper.find(MoreButton)).toHaveLength(0);
    });
});