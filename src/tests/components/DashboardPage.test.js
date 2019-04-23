import React from 'react';
import { shallow } from 'enzyme';
import {createSerializer} from 'enzyme-to-json';
import toJson from 'enzyme-to-json';
import DashboardPage from '../../components/DashboardPage'

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

test('should render DashboardPage Component correctly', ()=>{
    const wrapper = shallow(<DashboardPage />)
    expect(toJson(wrapper)).toMatchSnapshot()
})
 