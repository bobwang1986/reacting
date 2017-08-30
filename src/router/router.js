import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  HashRouter
} from 'react-router-dom'
import App from '../components/app/app';
import Login from '../containers/Login';

const Routers = () => (
  <Router>
      <Route path="/" component={App}>
          <Route path="/login" component={Login}>
            
          </Route>
      </Route>
  </Router>
)
export default Routers