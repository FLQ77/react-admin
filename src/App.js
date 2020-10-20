import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import loadable from './utils/loadable'

import './style/base.scss'
import './style/App.scss'

// 公共模块
const DefaultLayout = loadable(()=> import('./containers')) 


// 基础模块

const App = () => (
  <Router>
    <Switch>
      <Route path='/' exact render={() => <Redirect to='/index'></Redirect>} />
      <Route component={DefaultLayout} />
    </Switch>
  </Router>
)

export default App;
