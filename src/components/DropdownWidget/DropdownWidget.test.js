import React from 'react';
import { shallow } from 'enzyme';
import DropdownWidget from './DropdownWidget';

const click = jest.fn();
const items = [
    {
        key: "item-one",
        contains: "item-one",
        href: "test",
        onclick: click
    },
    {
        key: "item-two",
        contains: "item-two",
        href: "test",
        onclick: click
    }
];

describe('<DropdownWidget />', () => {
    it('renders dropdown with items', () => {
        const wrapper = shallow(<DropdownWidget 
        items={items}/>);
        expect(wrapper.children().children()).toHaveLength(2);
        expect(click).not.toBeCalled();
        for (var i=0; i<items.length; i++) {
            wrapper.children().children().at(i).simulate('click');    
        }
        expect(click).toHaveBeenCalledTimes(items.length);
    });
});
