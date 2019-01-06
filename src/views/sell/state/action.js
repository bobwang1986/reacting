import axios from 'axios';
import config from '../../../config/config'
export const ON_SELLSTOCK = 'ON_SELLSTOCK';

export const sellStock = (params, router) => {
 return (dispatch) => {
     axios.post(config.host+'/tradeInfo/sell',params).then(function (response) {
       if(response.data.success){
         router.push('/trade')
       }
       alert(response.data.message)
       dispatch({type: ON_SELLSTOCK, isSellDeal: response.data.success})
     }).catch(function (error) {
       console.log(error);
     });
   }
}