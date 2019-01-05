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

class TradeComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const paperOptStyle = {
      display: 'inline-block',
      padding:10,
      height:150
    };
    const {tradeInfoList} = this.props
    return (
      <div className='trade-container'>
        <Toolbar>
          <ToolbarGroup firstChild={true}>
            <h2 className='trade-title'>极简股票交易系统</h2>
          </ToolbarGroup>
          <ToolbarGroup>
            <RaisedButton label="退出" labelStyle={styles} onClick={this.props.logout}/>
          </ToolbarGroup>
        </Toolbar>
        <div className='trade-content'>

        <div className="trade-paper trade-paper-opt">
          <Paper style={paperOptStyle} onClick={this.props.buy}>
            <h1>买入</h1>
          </Paper>
          <Paper style={paperOptStyle} onClick={this.props.sell}>
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
                {
                  tradeInfoList.map((item,index)=>{
                      return (
                        <TableRow>
                          <TableRowColumn>{item.code}</TableRowColumn>
                          <TableRowColumn>{item.name}</TableRowColumn>
                          <TableRowColumn>{item.tradeAmount}</TableRowColumn>
                          <TableRowColumn>{item.currentPrice}</TableRowColumn>
                          <TableRowColumn>{item.tradePrice}</TableRowColumn>
                          <TableRowColumn>+1%</TableRowColumn>
                        </TableRow>
                      )
                  })
                }
                </TableBody>
              </Table>
          </div>

          <div className="trade-button">
              <RaisedButton label="返回" labelStyle={styles} onClick={this.props.back}/>
          </div>

        </div>
      </div>
    );
  }
}

export default TradeComponent;
