import axios from 'axios';
import config from '../../../config/config'
export const ON_BUYSTOCK = 'ON_BUYSTOCK';

export const buyStock = (params, router) => {
 return (dispatch) => {
     axios.post(config.host+'/tradeInfo/buy',params).then(function (response) {
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
