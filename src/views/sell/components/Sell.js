import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import styles from '../../../themes/commonUIStyle'
import './styles.css'

class SellComponent extends Component {
  constructor(props) {
    super(props);
  }

  goSell = ()=>{
    const params = {
      code: this.refs.code.getValue(),
      currentPrice: this.refs.price.getValue(),
      tradePrice: this.refs.price.getValue(),
      tradeAmount: this.refs.amount.getValue(),
      userId:"admin",
      name:"股票8"
    };
    this.props.sell(params);
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
          ref="code"
        />
        <TextField
          hintText="请输入卖出价格"
          floatingLabelText="卖出价格"
          multiLine={true}
          rows={1}
          fullWidth={true}
          ref="price"
        />
        <TextField
          hintText="请输入卖出数量"
          floatingLabelText="卖出数量"
          multiLine={true}
          rows={1}
          fullWidth={true}
          ref="amount"
        />

        <div>
          <div className='button add-vote-button-submit'>
            <RaisedButton label="卖出" labelStyle={styles}  onClick={this.goSell}/>
            &nbsp;&nbsp;
            <RaisedButton label="返回" labelStyle={styles}  onClick={this.props.back}/>
          </div>
        </div>
      </div>
    );
  }
}

export default SellComponent;
