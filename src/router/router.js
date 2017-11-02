import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Login from '../views/login/'
import Home from '../views/home/'
import AddVotes from '../views/addVotes/'
import Report from '../views/report/'
import editVotes from '../views/editVotes/'

const Routers = () => (
  <Router>
    <div>
      <Route exact path="/" component={Login}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/home" component={Home}></Route>
      <Route path="/AddVotes" component={AddVotes}></Route>
      <Route path="/editVotes" component={editVotes}></Route>
      <Route path="/Report" component={Report}></Route>
    </div>
  </Router>
)
export default Routers
