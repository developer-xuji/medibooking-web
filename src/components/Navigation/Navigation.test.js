import React from 'react';
import { shallow } from 'enzyme';
import Container from "../Container";
import Navigation from "./Navigation";
import Main from "./components/Main";
import WithAuthenticationModalsAuthentication from "./components/Authentication";
import MobileNav from "./components/MobileNav";

describe('<Navigation />', () => {
    it('renders', () => {
        const wrapper = shallow(<Navigation />);

        expect(wrapper.find(Container)).toHaveLength(1);
        expect(wrapper.find(Main)).toHaveLength(1);
        expect(wrapper.find(WithAuthenticationModalsAuthentication)).toHaveLength(1);
        expect(wrapper.find(MobileNav)).toHaveLength(1);
    });
});