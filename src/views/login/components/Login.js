import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import styles from '../../../themes/commonUIStyle'
import './styles.css'

class Login extends Component {
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.goToHome = this.goToHome.bind(this);
  }
  goToHome = ()=>{
    console.log(this.props);
    const userInfo = {
      userName: this.refs.userName.getValue(),
      password: this.refs.password.getValue()
    };
    console.log(userInfo);
    this.props.submit(userInfo);
    //this.props.history.push("/home")
  }
  render() {
    const {} = this.props;
    const paperStyle = {
      height: 300,
      width: 300,
      margin: 20,
      display: 'inline-block',
      padding:20
    };
    return (
      <div className='login-container'>
        <div className='login-box'>
          <Paper style={paperStyle} zDepth={5}>
            <h2>RM小助手管理端</h2>
            <TextField
              hintText="用户名"
              fullWidth={true}
              style={styles}
              ref="userName"
            />
            <TextField
              hintText="密码"
              type="password"
              fullWidth={true}
              style={styles}
              ref="password"
            />
            <div className='button'>
              <RaisedButton label="登录" labelStyle={styles} fullWidth={true} onClick={this.goToHome}/>
            </div>
          </Paper>
        </div>

      </div>
    );
  }
}

export default Login;
