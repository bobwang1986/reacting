import React, { Component } from 'react';
class Login extends Component {
  
  render() {
    const { userName, password, fn, history } = this.props;
    console.log(this.props);
    return (
      <div className="LoginContainer">
            name:<input type='text' value={userName} readOnly />
            {' '}
            password:<input type='text' value={password} readOnly />
            {' '}
            <button onClick={fn.onFetch}>show user info</button>
            <button onClick={history.goBack}>Go Back</button>
            
      </div>
    );
  }
}

export default Login;