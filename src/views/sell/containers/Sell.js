import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SellComponent from '../components/Sell'
import * as sell from '../state/action'


class Sell extends Component {
  constructor(props) {
    super(props);
    this.state = {
       isSellDeal:this.props.isSellDeal
    }
  }

  logout = ()=>{
    this.props.history.push("/login")
  }

  back = ()=>{
    this.props.history.push("/trade")
  }

  sell = (params) => {
    this.props.sellStock(params,this.props.history)
  }

  render(){
    return (
      <div>
        <SellComponent
          logout = {this.logout}
          back = {this.back}
          sell = {this.sell}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isSellDeal:state.sell.isSellDeal
  }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(sell, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Sell)
