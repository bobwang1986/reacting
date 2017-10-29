import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import App from '../views/app/'
import Login from '../views/login/'
import Home from '../views/home/'

const Routers = () => (
  <Router>
    <div>
      <Route exact path="/" component={App}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/home" component={Home}></Route>
    </div>
  </Router>
)
export default Routers
