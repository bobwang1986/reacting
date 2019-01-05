import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import BuyComponent from '../components/Buy'
import * as buy from '../state/action'


class Buy extends Component {
  constructor(props) {
    super(props);
    this.state = {
       isBuyDeal:this.props.isBuyDeal
    }
  }

  logout = ()=>{
    this.props.history.push("/login")
  }

  back = ()=>{
    this.props.history.push("/trade")
  }

  buy = (params) => {
    this.props.buyStock(params,this.props.history)
  }

  render(){
    return (
      <div>
        <BuyComponent
          logout = {this.logout}
          back = {this.back}
          buy = {this.buy}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isBuyDeal:state.buy.isBuyDeal
  }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(buy, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Buy)
