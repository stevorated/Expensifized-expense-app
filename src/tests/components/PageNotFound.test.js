import React from 'react';
import { shallow } from 'enzyme';
import {createSerializer} from 'enzyme-to-json';
import toJson from 'enzyme-to-json';
import PageNotFound from '../../components/PageNotFound'

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

test('should render PageNotFound Component correctly', ()=>{
    const wrapper = shallow(<PageNotFound />)
    expect(toJson(wrapper)).toMatchSnapshot()
})
 