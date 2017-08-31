import React, { Component } from 'react';
class Login extends Component {
  
  render() {
    const { userName, password, submit, history } = this.props;

    return (
      <div className="LoginContainer">
            name:<input type='text' value={userName} readOnly />
            {' '}
            password:<input type='text' value={password} readOnly />
            {' '}
            <button onClick={submit}>show user info</button>
            <button onClick={history.goBack}>Go Back</button>
      </div>
    );
  }
}

export default Login;