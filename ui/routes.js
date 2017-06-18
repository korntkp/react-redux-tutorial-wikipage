import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import { App, Home, Pages } from './components'

const history = createBrowserHistory()

export default () => {
  return (
    <Router history={history}>
      <div>
        <Route path='/' component={App} />
        <Route exact path='/' component={Home} />
        <Route exact path='/pages' component={Pages} />
      </div>
    </Router>
  )
}
