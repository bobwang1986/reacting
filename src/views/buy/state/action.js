import axios from 'axios';

export const ON_BUYSTOCK = 'ON_BUYSTOCK';

export const buyStock = (params, router) => {
 return (dispatch) => {
     axios.post('http://localhost:8080/tradeInfo/buy',params).then(function (response) {
       if(response.data.success){
         router.push('/trade')
       }
       alert(response.data.message)
       dispatch({type: ON_BUYSTOCK, isBuyDeal: response.data.success})
     }).catch(function (error) {
       console.log(error);
     });
   }
}
