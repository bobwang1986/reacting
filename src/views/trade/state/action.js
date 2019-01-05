import axios from 'axios';

export const ON_GETTRADELIST = 'ON_GETTRADELIST';

export const getTradeInfoList = (params, router) => {
 // temp params code for query tradeInfo
 if(!params || !params.userId){
   params = {'userId':'admin'}
 }
 return (dispatch) => {
   axios.get('http://localhost:8080/tradeInfo?userId='+params.userId).then(function (response) {
     dispatch({type: ON_GETTRADELIST, tradeInfoList: response.data.data})
   }).catch(function (error) {
     console.log(error);
   });
 }
}
