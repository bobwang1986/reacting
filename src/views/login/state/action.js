import axios from 'axios'
import config from '../../../config/config'


export const ON_SUBMIMT = 'ON_SUBMIMT';
export const submit = (userInfo, router) => {
  return (dispatch) => {
    axios.post(`${config.user}/authorize`,{
        "staffId": userInfo.userName,
        "password": userInfo.password//"21232F297A57A5A743894A0E4A801FC3"
    }).then(function(response){
      console.log(response.data);
      dispatch({ type: ON_SUBMIMT, payload: response.data });
      router.history.push("/home")
    })
    .catch(function(err){
      console.log(err);
    });
  }
}  