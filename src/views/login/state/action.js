import axios from 'axios'
import config from '../../../config/config'

export const ON_SUBMIMT = 'ON_SUBMIMT';

export const submit = (userInfo, router) => {
  return (dispatch) => {
    axios.post(`${config.user}/authorize`,{
        "staffId": userInfo.name,
        "password": userInfo.password//"21232F297A57A5A743894A0E4A801FC3"
    }).then(function(response){
      console.log(response.data);
      //dispatch({ type: ON_SUBMIMT, payload: response.data });
      router.history.push("/home")
    })
    .catch(function(err){
      console.log(err);
    });
  }
}

 export const login = (userInfo) => {
   return (dispatch) => {
     axios.post('http://localhost:8080/login',userInfo).then(function (response) {
       console.log(response);
       alert(JSON.stringify(response))
       //dispatch({type: ON_SUBMIMT, payload: response.data})
     }).catch(function (error) {
       console.log(error);
     });
   }
  }
