import React from 'react';
import { shallow } from 'enzyme';
import DoctorsPage from './DoctorsPage';
import DoctorsContainer from "./components/DoctorsContainer";
import DoctorsSearchBar from "./components/DoctorsSearchBar";
import DoctorsFilter from "./components/DoctorsFilter";

describe('<DoctorsPage />', () => {
    it('renders if loading is true', () => {
        const wrapper = shallow(<DoctorsPage />);

        expect(wrapper.find(DoctorsContainer)).toHaveLength(0);
        expect(wrapper.find(DoctorsSearchBar)).toHaveLength(0);
        expect(wrapper.find(DoctorsFilter)).toHaveLength(0);
    });
});