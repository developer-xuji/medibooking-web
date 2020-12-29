import React from 'react';
import { shallow } from 'enzyme';
import { Authentication } from './Authentication';
import NavItem from "../NavItem";
import Avatar from "./components/Avatar";

const setShowModalSignUP = jest.fn();
const username = "Test";

describe('<Authentication />', () => {
    it('renders "Log In" and "Sign In" NavItems when there is no users', () => {
        const wrapper = shallow(<Authentication 
        user={null}
        setShowModal={setShowModalSignUP}/>);
        expect(wrapper.find(NavItem)).toHaveLength(2);
        expect(wrapper.find(NavItem).at(0).prop('children')[1]).toBe('Sign Up');
        expect(wrapper.find(NavItem).at(1).prop('children')[1]).toBe('Log in');
        expect(setShowModalSignUP).not.toBeCalled();
        wrapper.find(NavItem).at(0).simulate('click');
        expect(setShowModalSignUP).toHaveBeenCalledTimes(1);
        wrapper.find(NavItem).at(1).simulate('click');
        expect(setShowModalSignUP).toHaveBeenCalledTimes(2);
    });

    it('renders "User Center" when there is a user', () => {
        const wrapper = shallow(<Authentication
        user={username}/>);
        expect(wrapper.find(NavItem)).toHaveLength(1);
        expect(wrapper.find(NavItem).at(0).prop('children')).toBe(username);
        expect(wrapper.find(Avatar)).toHaveLength(1);
    });
});