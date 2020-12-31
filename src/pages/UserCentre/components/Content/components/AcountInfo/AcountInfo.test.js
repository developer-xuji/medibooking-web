import React from 'react';
import { shallow } from 'enzyme';
import AcountInfo from './AccountInfo';
import PasswordForm from "./components/PasswordForm";

describe('<AcountInfo />', () => {
    it('renders', () => {
        const wrapper = shallow(<AcountInfo />);

        expect(wrapper.find(PasswordForm)).toHaveLength(1);
    });
});

