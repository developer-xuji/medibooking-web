import React from 'react';
import { shallow } from 'enzyme';
import SignUpModal from './SignUpModal';
import { Modal } from "../../../Modal";
import TextInput from "../../../TextInput";
import ErrorMessage from "../../../ErrorMessage";
import FormItem from "../../../FormItem";

describe('<SignUpModal />', () => {
    it('renders with no error and login fail message', () => {
        const wrapper = shallow(<SignUpModal />);
    });
});
