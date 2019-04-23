import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense, removeExpense, editExpense } from './actions/expenses'
import { setTextFilter, setEndDate, setStartDate, sortByAmount, sortByDate } from './actions/filters'
import getVisibleExpenses from './selectors/expenses.selector'

import 'normalize.css/normalize.css'
import './styles/style.scss'
import './styles/style.scss'
import 'react-dates/lib/css/_datepicker.css'

const rootElement = document.getElementById('app')

const store = configureStore()

store.dispatch(addExpense({
  desc: 'water bill', 
  amount: 5000,
  createdAt: 1000
}))

store.dispatch(addExpense({
  desc: 'gas bill', 
  amount: 1200,
  createdAt: 1000
}))

store.dispatch(addExpense({
  desc: 'electric bill', 
  amount: 4500,
  createdAt: 2000
}))

store.dispatch(addExpense({
  desc: 'food', 
  amount: 4300,
  createdAt: 1000
}))

// setTimeout(() => {
//   store.dispatch(setTextFilter('water'))
// },3000)


const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

const jsx = (
  <Provider store={store}>
    <AppRouter  />
  </Provider>
)

ReactDOM.render(
  jsx
  ,rootElement)
