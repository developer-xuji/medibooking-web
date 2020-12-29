import React from 'react';
import { shallow } from 'enzyme';
import Main from './Main';
import Icon from "../../../Icon";

describe('<Main />', () => {
    it('renders', () => {
        const wrapper = shallow(<Main />);

        expect(wrapper.find(Icon)).toHaveLength(2);
    });
});