import React, { Component } from 'react';

class Login extends Component {
  render() {
    const { userName, password, submit } = this.props;
    console.log(this.props);
    return (
      <div className="LoginContainer">
           bbb:{userName}
            name:<input type='text' />
            password:<input type='password' />
            <button onClick={submit}>show user info</button>
      </div>
    );
  }
}

export default Login;