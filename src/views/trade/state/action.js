// import axios from 'axios';
// import config from '../../../config/config'
import apiFetch from '../../../utils/apiUtil'

export const ON_GETTRADELIST = 'ON_GETTRADELIST';

// export const getTradeInfoList = (params, router) => {
//  // temp params code for query tradeInfo
//  if(!params || !params.userId){
//    params = {'userId':'admin'}
//  }
//  return (dispatch) => {
//    axios.get(config.host+'/tradeInfo?userId='+params.userId).then(function (response) {
//      dispatch({type: ON_GETTRADELIST, tradeInfoList: response.data.data})
//    }).catch(function (error) {
//      console.log(error);
//    });
//  }
// }

export const getTradeInfoList = (params, router) => {
  // temp params code for query tradeInfo
  if(!params || !params.userId){
    params = {'userId':'admin'}
  }
  return (dispatch) => {
    apiFetch('/tradeInfo').then(function (response) {
      dispatch({type: ON_GETTRADELIST, tradeInfoList: response.data.data})
    }).catch(function (error) {
      console.log(error);
    });
  }
 }
