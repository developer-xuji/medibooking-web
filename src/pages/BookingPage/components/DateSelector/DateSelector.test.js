import React from 'react';
import { shallow } from 'enzyme';
import DeleteSelector from './DateSelector';
import { DatePicker } from "antd";

const title = "title";
const onSelect = jest.fn();

describe('<DeleteSelector />', () => {
    it('renders', () => {
        const wrapper = shallow(<DeleteSelector 
        title={title}
        onSelect={onSelect}/>);
        
        expect(wrapper.childAt(0).text()).toEqual("title");
        expect(wrapper.find(DatePicker)).toHaveLength(1);
    });
});
