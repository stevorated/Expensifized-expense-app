import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
// import { addExpense, removeExpense, editExpense } from './actions/expenses'
// import { setTextFilter, setEndDate, setStartDate, sortByAmount, sortByDate } from './actions/filters'
import getVisibleExpenses from './selectors/expenses.selector'

import 'normalize.css/normalize.css'
import './styles/style.scss'
import './styles/style.scss'
import 'react-dates/lib/css/_datepicker.css'
import './firebase/firebase'


const rootElement = document.getElementById('app')

const store = configureStore()

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)

const jsx = (
  <Provider store={store}>
    <AppRouter  />
  </Provider>
)

ReactDOM.render(
  jsx
  ,rootElement)


