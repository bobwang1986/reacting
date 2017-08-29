import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import routers from './router';
import App from './containers/app/app';
import Login from './containers/login/login';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<routers />, document.getElementById('root'));
registerServiceWorker();
