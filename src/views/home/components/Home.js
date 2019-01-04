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

class Home extends Component {
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.logout = this.logout.bind(this);
    this.search = this.search.bind(this);
    this.goToAdd = this.goToAdd.bind(this);
    this.getReport = this.getReport.bind(this);
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
  getReport = ()=>{
    this.props.history.push("/report")
  }
  goToTrade = ()=>{
    this.props.history.push("/trade")
  }
  handleChange = (event, index, value) => this.setState({value});
  render() {
    const paperStyle = {
      display: 'inline-block',
      padding:20,
      height:150
    };
    return (
      <div className='home-container'>
        <Toolbar>
          <ToolbarGroup firstChild={true}>
            <h2 className='home-title'>极简股票交易系统</h2>
          </ToolbarGroup>
          <ToolbarGroup>
            <RaisedButton label="退出" labelStyle={styles} onClick={this.logout}/>
          </ToolbarGroup>
        </Toolbar>
        <div className='home-content'>
          <div className="home-paper">
            <Paper style={paperStyle}>
              <h3>首页</h3>
            </Paper>
            <Paper style={paperStyle} onClick={this.goToTrade}>
              <h3>交易</h3>
            </Paper>
            <Paper style={paperStyle}>
              <h3>自选</h3>
            </Paper>
            <Paper style={paperStyle}>
              <h3>行情</h3>
            </Paper>
            <Paper style={paperStyle}>
              <h3>资讯</h3>
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
                  <TableRow>
                    <TableRowColumn>000001</TableRowColumn>
                    <TableRowColumn>股票1</TableRowColumn>
                    <TableRowColumn>100</TableRowColumn>
                    <TableRowColumn>+1%</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn>000001</TableRowColumn>
                    <TableRowColumn>股票1</TableRowColumn>
                    <TableRowColumn>100</TableRowColumn>
                    <TableRowColumn>+1%</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn>000001</TableRowColumn>
                    <TableRowColumn>股票1</TableRowColumn>
                    <TableRowColumn>100</TableRowColumn>
                    <TableRowColumn>+1%</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn>000001</TableRowColumn>
                    <TableRowColumn>股票1</TableRowColumn>
                    <TableRowColumn>100</TableRowColumn>
                    <TableRowColumn>+1%</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn>000001</TableRowColumn>
                    <TableRowColumn>股票1</TableRowColumn>
                    <TableRowColumn>100</TableRowColumn>
                    <TableRowColumn>+1%</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn>000001</TableRowColumn>
                    <TableRowColumn>股票1</TableRowColumn>
                    <TableRowColumn>100</TableRowColumn>
                    <TableRowColumn>+1%</TableRowColumn>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
    );
  }
}

export default Home;
