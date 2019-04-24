import expenseTotalSelector from '../../selectors/expenseTotal.selector'

import expenses from '../fixtures/expenses'

test('should return 0 if no expenses', ()=> {
    const res = expenseTotalSelector([])
    expect(res).toBe(0)
})

test('should correctly add up single expense', ()=> {
    const res = expenseTotalSelector([expenses[1]])
    expect(res).toBe(expenses[1].amount)
})

test('should correctly add up multiple expense', ()=> {
    const res = expenseTotalSelector(expenses)
    expect(res).toBe(expenses[0].amount + expenses[1].amount + expenses[2].amount)
})