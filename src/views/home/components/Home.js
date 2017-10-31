import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import style from 'material-ui/styles'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import './styles.css'
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
import FlatButton from 'material-ui/FlatButton';
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
  handleChange = (event, index, value) => this.setState({value});

  componentDidMount() {
      this.props.getVoteList()
  }

  render() {
    console.log('dasfdsafdsafdsa');
    console.log(this.props.voteList);
    const voteList = this.props.voteList;
    return (
      <div className='home-container'>
        <Toolbar>
          <ToolbarGroup firstChild={true}>
            <h2 className='home-title'>MiniOA</h2>
          </ToolbarGroup>
          <ToolbarGroup>
            <RaisedButton label="退出" labelStyle={styles} onClick={this.logout}/>
          </ToolbarGroup>
        </Toolbar>
        <div className='home-content'>
        <div className='home-search'>
          <TextField hintText="Key words"/>
          <span className='button'>
            <RaisedButton label="Search" primary={true} style={style} onClick={this.search} />
          </span>
        </div>
        <div className='home-table'>
          <RaisedButton label="Add" primary={true} style={style} onClick={this.goToAdd} />
          <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderColumn>ID</TableHeaderColumn>
                  <TableHeaderColumn>主题</TableHeaderColumn>
                  <TableHeaderColumn>已投票数</TableHeaderColumn>
                  <TableHeaderColumn>操作</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody>
                {
                  voteList && voteList.map((item, key) => {
                    return <TableRow key={key}><TableRowColumn>{key+1}</TableRowColumn>
                      <TableRowColumn>{item.title}</TableRowColumn>
                      <TableRowColumn>{item.voters.length}</TableRowColumn>
                      <TableRowColumn>
                        <FlatButton label="Result" primary={true} onClick={this.getReport}/>
                        <FlatButton label="Edit" secondary={true} />
                        <FlatButton label="Del" disabled={false} />

                      </TableRowColumn>
                    </TableRow>
                  })
                }
              </TableBody>
            </Table>
          </div>
        </div>
        <div className='button'>
          <RaisedButton label="back" labelStyle={styles} fullWidth={true} onClick={this.logout}/>
        </div>
      </div>
    );
  }
}

export default Home;
