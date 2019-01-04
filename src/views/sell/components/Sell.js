import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import styles from '../../../themes/commonUIStyle'
import './styles.css'

class Sell extends Component {
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.goToHome = this.goToHome.bind(this);
    this.state = {
      value: 0,
      checked:false
    };
  }
  goToHome = () => {
    this.props.history.push("/trade")
  }
  handleChange = (event, index, value) => this.setState({value});
  addOption = () => {

  }
  updateCheck() {
    this.setState((oldState) => {
      return {
        checked: !oldState.checked,
      };
    });
  }
  render() {
    return (
      <div className='add-vote-container'>
        <h2>卖出</h2>
        <TextField
          hintText="请输入股票代码"
          floatingLabelText="股票代码"
          multiLine={true}
          rows={1}
          fullWidth={true}
        />
        <TextField
          hintText="请输入卖出价格"
          floatingLabelText="卖出价格"
          multiLine={true}
          rows={1}
          fullWidth={true}
        />
        <TextField
          hintText="请输入卖出数量"
          floatingLabelText="卖出数量"
          multiLine={true}
          rows={1}
          fullWidth={true}
        />

        <div>
          <div className='button add-vote-button-submit'>
            <RaisedButton label="卖出" labelStyle={styles}  onClick={this.goToHome}/>
            &nbsp;&nbsp;
            <RaisedButton label="返回" labelStyle={styles}  onClick={this.goToHome}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Sell;
