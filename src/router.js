import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import App from './containers/app/app';

const routers = () => (
  <Router>
      <Route path="/" component={App}/>
  </Router>
)
export default routers