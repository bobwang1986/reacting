import axios from 'axios';

export const ON_GETSTOCKLIST = 'ON_GETSTOCKLIST';

 export const getStockList = (params, router) => {
  return (dispatch) => {
    axios.get('http://localhost:8080/stock').then(function (response) {
      dispatch({type: ON_GETSTOCKLIST, stockList: response.data.data})
    }).catch(function (error) {
      console.log(error);
    });
  }
 }
