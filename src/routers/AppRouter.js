import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"

import AddExpensePage  from '../components/AddExpensePage'
import EditExpensePage  from '../components/EditExpensePage'
import DashboardPage  from '../components/DashboardPage'
import Header  from '../components/Header'
import HelpPage  from '../components/HelpPage'
import PageNotFound  from '../components/PageNotFound'

const AppRouter = () => (
  <BrowserRouter>
  <Header>
    <h1>Expansifized</h1>
  </Header>
    <Switch>
      <Route path="/" component={DashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit/:id" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>
)

export default AppRouter
