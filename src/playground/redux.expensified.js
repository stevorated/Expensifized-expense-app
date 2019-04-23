


store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})

const expenseOne = store.dispatch(addExpense({
    desc: 'Rent', 
    amount: 100,
    createdAt: 10000
}))
const expenseTwo = store.dispatch(addExpense({
    desc: 'Coffee', 
    amount: 400,
    createdAt: 1000
}))

// store.dispatch(removeExpense({id: expenseOne.expense.id}))
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 700}))
// store.dispatch(setTextFilter('rent'))
// store.dispatch(sortByAmount())
// store.dispatch(sortByDate())


// store.dispatch(setStartDate(101))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(120))



// const demoState = {
//     expenses: [{
//         id: '4535mlk453543fd',
//         desc: 'Rent, January',
//         note: 'this was the final payment',
//         amount: 354500,
//         createdAt: 0
//     }],
//     filters: {
//         text: 'rent',
//         sortBy: 'amount',
//         startDate: undefined,
//         endDate: undefined
//     }
// }