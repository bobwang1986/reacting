import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarTitle
} from 'material-ui/Toolbar';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import styles from '../../../themes/commonUIStyle'
import './styles.css'

class Trade extends Component {
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.logout = this.logout.bind(this);
    this.search = this.search.bind(this);
    this.goToAdd = this.goToAdd.bind(this);
    this.buy = this.buy.bind(this);
    this.sell = this.sell.bind(this);
  }
  logout = ()=>{
    this.props.history.push("/login")
  }
  search = ()=>{
    alert('clicked');
  }
  goToAdd = ()=>{
    this.props.history.push("/addVotes")
  }
  back = ()=>{
    this.props.history.push("/home")
  }
  buy = () => {
    this.props.history.push("/buy")
  }
  sell = () => {
    this.props.history.push("/sell")
  }
  handleChange = (event, index, value) => this.setState({value});
  render() {
    const paperStyle = {
      display: 'inline-block',
      padding:10,
      height:100
    };
    const paperOptStyle = {
      display: 'inline-block',
      padding:10,
      height:150
    };
    return (
      <div className='trade-container'>
        <Toolbar>
          <ToolbarGroup firstChild={true}>
            <h2 className='trade-title'>极简股票交易系统</h2>
          </ToolbarGroup>
          <ToolbarGroup>
            <RaisedButton label="退出" labelStyle={styles} onClick={this.logout}/>
          </ToolbarGroup>
        </Toolbar>
        <div className='trade-content'>

        <div className="trade-paper trade-paper-opt">
          <Paper style={paperOptStyle} onClick={this.buy}>
            <h1>买入</h1>
          </Paper>
          <Paper style={paperOptStyle} onClick={this.sell}>
            <h1>卖出</h1>
          </Paper>
        </div>

        <div className='trade-table'>
            <Table>
                <TableHeader>
                  <TableRow>
                    <TableHeaderColumn>股票代码</TableHeaderColumn>
                    <TableHeaderColumn>股票名称</TableHeaderColumn>
                    <TableHeaderColumn>持仓</TableHeaderColumn>
                    <TableHeaderColumn>现价</TableHeaderColumn>
                    <TableHeaderColumn>成本</TableHeaderColumn>
                    <TableHeaderColumn>盈亏</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableRowColumn>000001</TableRowColumn>
                    <TableRowColumn>股票1</TableRowColumn>
                    <TableRowColumn>100</TableRowColumn>
                    <TableRowColumn>100</TableRowColumn>
                    <TableRowColumn>2</TableRowColumn>
                    <TableRowColumn>+5000%</TableRowColumn>
                  </TableRow>
                </TableBody>
              </Table>
          </div>

          <div className="trade-button">
              <RaisedButton label="返回" labelStyle={styles} onClick={this.back}/>
          </div>

        </div>
      </div>
    );
  }
}

export default Trade;
