import React from 'react';
import { shallow } from 'enzyme';
import MapArea from './index';
import GoogleMapReact from 'google-map-react';

describe('<MapArea />', () => {
    it('renders', () => {
        const wrapper = shallow(<MapArea />);

        expect(wrapper.find(GoogleMapReact)).toHaveLength(1);
    });
});