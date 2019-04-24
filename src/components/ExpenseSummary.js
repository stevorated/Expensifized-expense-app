import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import selectExpensetotal from '../selectors/expenseTotal.selector'
import selectExpenses from '../selectors/expenses.selector'

export const ExpenseSummary = ({expenseCount, expenseTotal}) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
    const formattedExpenses = numeral(expenseTotal/100).format('$0, 0.00')
    return (
        <div>
            <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpenses}</h1>
        </div>
    )
}


const mapStateToProps = (state)=> {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)
    return {
        expenseCount: visibleExpenses.length,
        expenseTotal: selectExpensetotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpenseSummary)