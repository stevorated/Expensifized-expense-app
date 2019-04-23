import React from 'react'
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses'

import moment from 'moment'

import { ExpenseListFilters } from '../../components/ExpenseListFilters'

import { filters, altFilters } from '../fixtures/filters'

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper

beforeEach(()=>{
    setTextFilter = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />)
})

test('should render ExpenseListFilters correctly',()=>{
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseListFilters with alt filters correctly',()=>{
    wrapper.setProps({filters: altFilters})
    expect(wrapper).toMatchSnapshot()
})

test('should handle text change', ()=>{
    const value = '111'
    wrapper.find('input').simulate('change', {
        target: {
            value
        }
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value)
})

test('should handle sort by date', ()=>{
    const value = 'date'
    wrapper.setProps({
        filters: altFilters
    })
    wrapper.find('select').simulate('change', {
        target: {value}
    })
    expect(sortByDate).toHaveBeenCalled()
})

test('should handle sort by amount.', ()=>{
    const value = 'amount'
    wrapper.setProps({
        filters
    })
    wrapper.find('select').simulate('change', {
        target: {value}
    })
    expect(sortByAmount).toHaveBeenCalled()
})

test('should handle data changes',()=>{
    const startDate = moment(0).add(4, 'years')
    const endDate = moment(0).add(8, 'years')
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({startDate, endDate})
    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})

test ('should handle data focus change', ()=>{
    const calanderFocused = 'endDate'
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calanderFocused)
    expect(wrapper.state('calanderFocused')).toBe(calanderFocused)
})