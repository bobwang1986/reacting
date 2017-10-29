import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import styles from '../../../themes/commonUIStyle'
import './styles.css'

class AddVotes extends Component {
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.goToHome = this.goToHome.bind(this);
  }
  goToHome = ()=>{
    this.props.history.push("/home")
  }
  render() {
    return (
      <div className='add-vote-container'>
        <h2>添加个投票</h2>
        <RaisedButton label="back" labelStyle={styles} fullWidth={true} onClick={this.goToHome}/>
      </div>
    );
  }
}

export default AddVotes;
