// import React from 'react'
// import { Router, Route } from 'react-router';
// import App from './containers/app/app'
// import Login from './containers/login/login'

// export default () => {
//   return (
//     <Router>
//       <Route path="/" component={App}/>
//       <Route path="/login" component={Login}/>
//     </Router>
//   )
// }

import React from 'react';
import { Route } from 'react-router';

import App from './containers/app/app'
import Login from './containers/login/login'

export default (
  <Route path="/" component={App}>
    <Route component={Login}/>
  </Route>
);