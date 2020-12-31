import React from 'react';
import { shallow } from 'enzyme';
import SignUpPage from './SignUpPage';
import Form from "./components/Form";
import SocialAuthButton from "./components/SocialAuthButton";
import Title from "./components/Title";

describe('<SignUpPage />', () => {
    it('renders', () => {
        const wrapper = shallow(<SignUpPage />);

        expect(wrapper.find(Form)).toHaveLength(1);
        expect(wrapper.find(SocialAuthButton)).toHaveLength(2);
        expect(wrapper.find(Title)).toHaveLength(1);
    });
});
