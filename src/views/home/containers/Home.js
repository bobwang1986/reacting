import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import HomeComponent from '../components/Home'
import * as home from '../state/action'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
       stockList:this.props.stockList
    }
  }

  componentDidMount = () => {
    this.props.getStockList();
  }

  componentWillReceiveProps = (nextProps) => {
    console.log("nextProps:"+JSON.stringify(nextProps))
    if(nextProps.stockList.length !== 0){
      this.setState({
        stockList:nextProps.stockList
      })
    }
  }

  logout = ()=>{
    this.props.history.push("/login")
  }

  goToTrade = ()=>{
    this.props.history.push("/trade")
  }

  render(){
    const { stockList } = this.state
    return (
      <div>
        <HomeComponent
          logout = {this.logout}
          goToTrade = {this.goToTrade}
          stockList = {stockList}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLogonSuccess: state.login.isLogonSuccess,
    stockList:state.home.stockList
  }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(home, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
