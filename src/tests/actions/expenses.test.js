import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

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

test('should setup correct expanse action values', ()=>{
    const expenseData = {
        desc: 'testing',
        note: 'testing',
        amount: 6000,
        createdAt: 100000
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('should setup correct DEFAULT expanse action values', ()=>{
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            desc :  '', 
            note: '', 
            amount: 0, 
            createdAt: 0,
            id: expect.any(String)
        }
    })
})