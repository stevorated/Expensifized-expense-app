import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import db from '../../firebase/firebase'

import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses'
import expenses from '../fixtures/expenses'

const createMockStore = configureMockStore([thunk])

test('should setup remove expanse action object', ()=> {
    const action = removeExpense({id: '123abc'})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})


test('should setup edit expanse action object', ()=> {
    const action = editExpense('123abc', {note:'new note value'})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'new note value'
        }
    })
})

test('should setup correct add expanse action values', ()=>{
    const action = addExpense(expenses[0])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[0]
    })
})

test('should add expanse to DB and store', (done)=> {
    const store = createMockStore({})
    const expenseData = {
        desc: 'testing',
        note: 'testing note',
        amount: 150,
        createdAt: 1000
    }
    store.dispatch(startAddExpense(expenseData)).then(()=>{
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })
        return db.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot)=> {
        expect(snapshot.val()).toEqual(expenseData)
        done()
    })
})

test('should add DEFAULT expanse to DB and store', (done)=> {
    const store = createMockStore({})
    const expenseData = {}
    const expectedData = {
        desc: '',
        note: '',
        amount: 0,
        createdAt: 0
    }

    store.dispatch(startAddExpense(expenseData)).then(()=>{
        const actions = store.getActions()
        
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expectedData
            }
        })
        return db.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot)=> {
        expect(snapshot.val()).toEqual({
            ...expectedData
        })
        done()
    })
})
