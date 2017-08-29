import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router } from 'react-router';
import routes from './router';
import App from './containers/app/app';
import Login from './containers/login/login';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router  routes={routes} />, document.getElementById('root'));
registerServiceWorker();
