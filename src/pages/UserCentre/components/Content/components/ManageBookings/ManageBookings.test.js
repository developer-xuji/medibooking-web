import React from 'react';
import { shallow } from 'enzyme';
import ManageBookings from './ManageBookings';
import Layout from "antd/lib/layout/layout";
import LoadingSpin from "../../../../../../components/LoadingSpin";
import { Empty } from "antd";

const bookingItemList = ['test', 'test']

describe('<ManageBookings />', () => {
    it('renders if loading is true', () => {
        const wrapper = shallow(<ManageBookings />);
        wrapper.setState({ loading: true});

        expect(wrapper.find(LoadingSpin)).toHaveLength(1);
        expect(wrapper.find(Layout)).toHaveLength(0);
        expect(wrapper.find(Empty)).toHaveLength(0);
    });

    it('renders if loading is false and bookingItemList is empty', () => {
        const wrapper = shallow(<ManageBookings />);
        wrapper.setState({ loading: false, bookingItemList: []});

        expect(wrapper.find(LoadingSpin)).toHaveLength(0);
        expect(wrapper.find(Layout)).toHaveLength(0);
        expect(wrapper.find(Empty)).toHaveLength(1);
    });

    it('renders if loading is false and bookingItemList is not empty', () => {
        const wrapper = shallow(<ManageBookings />);
        wrapper.setState({ loading: false, bookingItemList: bookingItemList});

        expect(wrapper.find(LoadingSpin)).toHaveLength(0);
        expect(wrapper.find(Layout)).toHaveLength(1);
        expect(wrapper.find(Empty)).toHaveLength(0);
    });
});