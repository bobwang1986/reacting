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

class HomeComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = function(){
    let isLogonSuccess = this.props.isLogonSuccess
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    const paperStyle = {
      display: 'inline-block',
      padding:20,
      height:150
    };
    const {stockList} = this.props
    return (
      <div className='home-container'>
        <Toolbar>
          <ToolbarGroup firstChild={true}>
            <h2 className='home-title'>极简股票交易系统</h2>
          </ToolbarGroup>
          <ToolbarGroup>
            <RaisedButton label="退出" labelStyle={styles} onClick={this.props.logout}/>
          </ToolbarGroup>
        </Toolbar>
        <div className='home-content'>
          <div className="home-paper">
            <Paper style={paperStyle} onClick={this.props.goToTrade}>
              <h3>交易</h3>
            </Paper>
            <Paper style={paperStyle}>
              <h3>自选(维护中)</h3>
            </Paper>
            <Paper style={paperStyle}>
              <h3>行情(维护中)</h3>
            </Paper>
            <Paper style={paperStyle}>
              <h3>资讯(维护中)</h3>
            </Paper>
          </div>
          <div className='home-table'>
            <Table>
                <TableHeader>
                  <TableRow>
                    <TableHeaderColumn>股票代码</TableHeaderColumn>
                    <TableHeaderColumn>股票名称</TableHeaderColumn>
                    <TableHeaderColumn>最新价格</TableHeaderColumn>
                    <TableHeaderColumn>涨跌幅</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {
                    stockList.map((stock,index)=>{
                        return (
                          <TableRow>
                            <TableRowColumn>{stock.code}</TableRowColumn>
                            <TableRowColumn>{stock.name}</TableRowColumn>
                            <TableRowColumn>{stock.price}</TableRowColumn>
                            <TableRowColumn>+1%</TableRowColumn>
                          </TableRow>
                        )
                    })
                  }
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
    );
  }
}

export default HomeComponent;
