import React from 'react';
import { shallow } from 'enzyme';
import InfoBody from './index';
import TagArea from "./TagArea";
import MapArea from "./MapArea";

const description = "desc";
const languages = [
    {
        languageName: "Test"
    },
    {
        languageName: "Test"
    },
];

const specializations = [
    {
        specializationName: "Test"
    },
    {
        specializationName: "Test"
    },
];

describe('<InfoBody />', () => {
    it('renders', () => {
        const wrapper = shallow(<InfoBody 
        description={description}
        languages={languages}
        specializations={specializations}/>);
        
        expect(wrapper.find(TagArea)).toHaveLength(2);
        expect(wrapper.find(MapArea)).toHaveLength(1);
    });
});