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
    this.props.history.push("/")
  }
  render() {
    const { userName, password, fn, history,payload } = this.props;
    const paperStyle = {
      height: 200,
      width: 200,
      margin: 20,
      display: 'inline-block',
      padding:20
    };
    return (
      <div className='Login-container'>
        <div className='login-box'>
          <Paper style={paperStyle} zDepth={5}>
            <TextField
              hintText="用户名"
              fullWidth={true}
              style={styles}
            />
            <TextField
              hintText="密码"
              type="password"
              fullWidth={true}
              style={styles}
            />
            <div>
              <RaisedButton label="登录" labelStyle={styles} fullWidth={true} onClick={this.goToHome}/>
            </div>
          </Paper>
        </div>

      </div>
    );
  }
}

export default Login;
