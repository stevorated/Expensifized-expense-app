import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseSummary } from '../../components/ExpenseSummary'

test('sould correctly render ExpenseSummary with 1 item', ()=> {
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expenseTotal={235} />)
    expect(wrapper).toMatchSnapshot()
})

test('sould correctly render ExpenseSummary with 1 item', ()=> {
    const wrapper = shallow(<ExpenseSummary expenseCount={23} expenseTotal={23523212} />)
    expect(wrapper).toMatchSnapshot()
})