import moment from 'moment'

import expenses from '../fixtures/expenses'

import expensesSelector from '../../selectors/expenses.selector'

test('should filter by text', ()=>{
    const filters = {
        text: '1',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    } 
    const res = expensesSelector(expenses, filters)
    expect(res).toEqual([expenses[0],expenses[1]])
})

test('should filter by startDate', ()=>{
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    } 
    const res = expensesSelector(expenses, filters)
    expect(res).toEqual([expenses[2],expenses[0]])
})

test('should filter by endDate', ()=>{
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    } 
    const res = expensesSelector(expenses, filters)
    expect(res).toEqual([expenses[0],expenses[1]])
})

test('should sort by date', ()=>{
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    } 
    const res = expensesSelector(expenses, filters)
    expect(res).toEqual([expenses[2],expenses[0],expenses[1]])
})

test('should sort by amount', ()=>{
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    } 
    const res = expensesSelector(expenses, filters)
    expect(res).toEqual([expenses[2],expenses[0],expenses[1]])
})
