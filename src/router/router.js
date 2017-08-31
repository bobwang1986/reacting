import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import App from '../components/app/app';
import Login from '../containers/Login';

const Routers = () => (
  <Router>
    <div>
      <Route exact path="/" component={App}> </Route>
      <Route path="/login" component={Login}></Route>
    </div>
  </Router>
)
export default Routers