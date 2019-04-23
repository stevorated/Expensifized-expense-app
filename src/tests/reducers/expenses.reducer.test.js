import expensesReducer from '../../reducers/expenses.reducer'
import moment from 'moment'
import expenses from '../fixtures/expenses'

test('should set up expenses DEFAULT state', ()=>{
    const state = expensesReducer(undefined,{type: '@@INIT'})
    expect(state).toEqual([])
})

test('should add an expense',()=>{
    const expense = {
            desc: 'testing',
            amount: 666,
            note: '',
            createdAt: 0 
        }

    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    
    const state = expensesReducer(expenses,action)
    expect(state).toEqual([...expenses,expense])
})

test('should remove expense by id', ()=>{
    
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    
    const state = expensesReducer(expenses,action)
    expect(state).toEqual([expenses[0],expenses[2]])
})

test('should remove expense by id that DOESNT EXIST', ()=>{
    const expense = {
        desc: 'testing',
        amount: 666,
        note: '',
        createdAt: 0 
    }
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-32432432423432',
        expense
    }
    
    const state = expensesReducer(expenses,action)
    expect(state).toEqual(expenses)
})


test('trying to edit non-existent id, should return current expenses', ()=>{
    const updates = {
        desc: 'testing'
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: '212312313212313',
        updates
    }
    const state = expensesReducer(expenses,action)
    expect(state).toEqual(expenses)
})

test('should return expenses after edit', ()=>{
    const updates = {
        desc: 'lucy in the sky'
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates
    }
    const state = expensesReducer(expenses,action)
    expect(state[0].desc).toEqual(updates.desc)
})
