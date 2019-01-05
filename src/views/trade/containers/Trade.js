import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import TradeComponent from '../components/Trade'
import * as trade from '../state/action'


class Trade extends Component {
  constructor(props) {
    super(props);
    this.state = {
       tradeInfoList:this.props.tradeInfoList
    }
  }

  componentDidMount = () => {
    this.props.getTradeInfoList();
  }

  componentWillReceiveProps = (nextProps) => {
    console.log("nextProps:"+JSON.stringify(nextProps))
    if(nextProps.tradeInfoList.length !== 0){
      this.setState({
        tradeInfoList:nextProps.tradeInfoList
      })
    }
  }

  logout = ()=>{
    this.props.history.push("/login")
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

  render(){
    const { tradeInfoList } = this.state
    return (
      <div>
        <TradeComponent
          logout = {this.logout}
          back = {this.back}
          buy = {this.buy}
          sell = {this.sell}
          tradeInfoList = {tradeInfoList}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tradeInfoList:state.trade.tradeInfoList
    // userName: state.login.userName,
    // password: state.login.password,
    // payload: state.login.payload
  }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(trade, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Trade)
