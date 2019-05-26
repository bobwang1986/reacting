import axios from 'axios'
import apiFetch from '../../../utils/apiUtil'
import config from '../../../config/config'

export const ON_GETSTOCKLIST = 'ON_GETSTOCKLIST'

//  export const getStockList = (params, router) => {
//   return (dispatch) => {
//     axios.get(config.host+'/stock').then(function (response) {
//       dispatch({type: ON_GETSTOCKLIST, stockList: response.data.data})
//     }).catch(function (error) {
//       console.log(error);
//     });
//   }
//  }

export const getStockList = (params, router) => {
  return (dispatch) => {
    apiFetch('/stock').then(function (response) {
      dispatch({type: ON_GETSTOCKLIST, stockList: response.data.data})
    }).catch(function (error) {
      console.log(error);
    });
  }
 }