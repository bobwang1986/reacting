import axios from 'axios'
import config from '../../../config/config'

export const ON_SUBMIMT = 'ON_SUBMIMT';

export const login = (userInfo, router) => {
 return (dispatch) => {
   axios.post('http://localhost:8080/login',userInfo).then(function (response) {
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
