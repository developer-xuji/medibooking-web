import React from 'react';
import { shallow } from 'enzyme';
import Modal from './Modal';

const onClose = jest.fn();

describe('<Modal />', () => {
    it('renders', () => {
        const wrapper = shallow(<Modal 
        onClose={onClose}
        title="title"
        description="desc"
        body="body"
        footer="footer"
        large="large"/>)
        expect(wrapper.children().children().children().at(0).text()).toEqual('title');
        expect(wrapper.children().children().children().at(1).text()).toEqual('desc');
        expect(wrapper.children().children().at(1).text()).toEqual('body');
        expect(wrapper.children().children().at(2).text()).toEqual('footer');
        expect(wrapper.prop('large')).toEqual('large');
        expect(onClose).not.toBeCalled();
        wrapper.children().children().children().at(2).simulate('click');
        expect(onClose).toBeCalled();
    });
});