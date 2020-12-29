import React from 'react';
import { shallow } from 'enzyme';
import { LoginModal } from './LogInModal';
import Modal from "../../../Modal";
import TextInput from "../../../TextInput";
import ErrorMessage from "../../../ErrorMessage";
import FormItem from "../../../FormItem";

// describe('<LoginModal />', () => {
//     it('renders with no error and login fail message', () => {
//         const wrapper = shallow(<LoginModal />);
//     });
// });