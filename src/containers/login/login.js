import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className="LoginContainer">
            name:<input type='text' />
            password:<input type='password' />
      </div>
    );
  }
}

export default Login;