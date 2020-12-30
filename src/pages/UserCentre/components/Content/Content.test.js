import React from 'react';
import { shallow } from 'enzyme';
import Content from './Content';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

describe('<Content />', () => {
    it('renders', () => {
        const wrapper = shallow(<Content />);

        expect(wrapper.find(Router)).toHaveLength(1);
        expect(wrapper.find(Switch)).toHaveLength(1);
        expect(wrapper.find(Route)).toHaveLength(4);
    });
});
