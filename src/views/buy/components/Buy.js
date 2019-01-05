import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import styles from '../../../themes/commonUIStyle'
import './styles.css'

class BuyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  goBuy = ()=>{
    const params = {
      code: this.refs.code.getValue(),
      currentPrice: this.refs.price.getValue(),
      tradePrice: this.refs.price.getValue(),
      tradeAmount: this.refs.amount.getValue(),
      userId:"admin",
      name:"股票8"
    };
    this.props.buy(params);
  }

  render() {
    return (
      <div className='add-vote-container'>
        <h2>买入</h2>
        <TextField
          hintText="请输入股票代码"
          floatingLabelText="股票代码"
          multiLine={true}
          rows={1}
          fullWidth={true}
          ref="code"
        />
        <TextField
          hintText="请输入买入价格"
          floatingLabelText="买入价格"
          multiLine={true}
          rows={1}
          fullWidth={true}
          ref="price"
        />
        <TextField
          hintText="请输入购买数量"
          floatingLabelText="购买数量"
          multiLine={true}
          rows={1}
          fullWidth={true}
          ref="amount"
        />

        <div>
          <div className='button add-vote-button-submit'>
            <RaisedButton label="买入" labelStyle={styles}  onClick={this.goBuy}/>
            &nbsp;&nbsp;
            <RaisedButton label="返回" labelStyle={styles}  onClick={this.props.back}/>
          </div>
        </div>
      </div>
    );
  }
}

export default BuyComponent;
