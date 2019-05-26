import axios from 'axios'
import config from '../../../config/config'
import apiFetch from '../../../utils/apiUtil'

export const ON_SUBMIMT = 'ON_SUBMIMT';

// export const login = (userInfo, router) => {
//  return (dispatch) => {
//    axios.post(config.host+'/login',userInfo).then(function (response) {
//      if(response.data.success){
//         router.push("/home")
//      }else{
//         alert(response.data.message)
//      }
//      dispatch({type: ON_SUBMIMT, isLogonSuccess: response.data.success})
//    }).catch(function (error) {
//      console.log(error);
//    });
//  }
// }

export const login = (userInfo, router) => {
  const setting = {
    "method":"POST",
    "body":userInfo
  }
  return (dispatch) => {
    apiFetch('/login',setting).then(function (response) {
      if(response.data.success){
         router.push("/home")
      }else{
         alert(response.data.message)
      }
      dispatch({type: ON_SUBMIMT, isLogonSuccess: response.data.success})
    }).catch(function (error) {
      console.log(error);
    });
  }
 }
