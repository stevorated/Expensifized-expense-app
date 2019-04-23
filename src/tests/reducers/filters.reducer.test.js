import moment from 'moment'

import filtersReducer from '../../reducers/filters.reducer'

test('should setup DEFAULT filter values', ()=>{ 
    const state = filtersReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }) 
})


test('should set filter text', ()=> {
    const state = filtersReducer(undefined,{type: 'TEXT_FILTER', text: 'testing'})
    expect(state.text).toBe('testing')
})

test('should set sortBy amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')
})

test('should set sortBy to date', ()=> {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
    const action = {type: 'SORT_BY_DATE'}

    const state = filtersReducer(currentState, action)

    expect(state.sortBy).toBe('date')
})

test('should set startDate', ()=>{
    const action = {
        type: 'SET_START_DATE',
        startDate: moment(0) 
    }
    const state = filtersReducer(undefined, action)
    expect(state.startDate).toEqual(moment(0))
})

test('should set endDate', ()=>{
    const action = {
        type: 'SET_END_DATE',
        endDate: moment(0) 
    }
    const state = filtersReducer(undefined, action)
    expect(state.endDate).toEqual(moment(0))
})