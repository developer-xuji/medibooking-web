import React from 'react';
import { shallow } from 'enzyme';
import Conctact from './Contact';
import Title from "../Title";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

describe('<Contact />', () => {
    it('renders', () => {
        const wrapper = shallow(<Conctact />);

        expect(wrapper.find(Title)).toHaveLength(1);
        expect(wrapper.find(FontAwesomeIcon)).toHaveLength(6);
    })
});