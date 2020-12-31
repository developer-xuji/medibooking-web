import React from 'react';
import { shallow } from 'enzyme';
import DoctorSelector from './DoctorSelector';
import { List } from "antd";

const title = "title";

describe('<DoctorSelector />', () => {
    it('renders', () => {
        const wrapper = shallow(<DoctorSelector 
        title={title}
        />);
        
        expect(wrapper.childAt(0).text()).toEqual("title");
        expect(wrapper.find(List)).toHaveLength(1);
    });
});