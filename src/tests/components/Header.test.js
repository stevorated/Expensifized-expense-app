import React from 'react';
import { shallow } from 'enzyme';
import {createSerializer} from 'enzyme-to-json';
import toJson from 'enzyme-to-json';
import Header from '../../components/Header'

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

test('should render Header Component correctly', ()=>{
    const wrapper = shallow(<Header />)
    expect(toJson(wrapper)).toMatchSnapshot()
})
 