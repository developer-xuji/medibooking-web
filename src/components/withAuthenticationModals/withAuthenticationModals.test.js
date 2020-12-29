import React from 'react';
import { shallow } from 'enzyme';
import withAuthenticationModals from './withAuthenticationModals';
import Authentication from '../Navigation/components/Authentication';
import SignUpModal from "./components/SignUpModal";
import LogInModal from "./components/LogInModal";

const AuthenticationModals = withAuthenticationModals(Authentication);

describe('<withAuthenticationModals />', () => {
    it('renders Authentication component', () => {
        const wrapper = shallow(<AuthenticationModals />);

        expect(wrapper.find(Authentication)).toHaveLength(1);
    });

    it('if showModal state is sign up', () => {
        const wrapper = shallow(<AuthenticationModals />);

        wrapper.setState({ showModal: "SIGN_UP" });
        expect(wrapper.find(SignUpModal)).toHaveLength(1);
        expect(wrapper.find(LogInModal)).toHaveLength(0);
    });

    it('if showModal state is log in', () => {
        const wrapper = shallow(<AuthenticationModals />);

        wrapper.setState({ showModal: "LOG_IN" });
        expect(wrapper.find(SignUpModal)).toHaveLength(0);
        expect(wrapper.find(LogInModal)).toHaveLength(1);
    });
});