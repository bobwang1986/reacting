import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import App from '../views/app/'
import Login from '../views/login/'
import Home from '../views/home/'
import AddVotes from '../views/addVotes/'
import Buy from '../views/buy/'
import Sell from '../views/sell/'
import Report from '../views/report/'
import Trade from '../views/trade/'

const Routers = () => (
  <Router>
    <div>
      <Route exact path="/" component={App}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/home" component={Home}></Route>
      <Route path="/trade" component={Trade}></Route>
      <Route path="/AddVotes" component={AddVotes}></Route>
      <Route path="/buy" component={Buy}></Route>
      <Route path="/sell" component={Sell}></Route>
      <Route path="/Report" component={Report}></Route>
    </div>
  </Router>
)
export default Routers
