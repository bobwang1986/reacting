import 'isomorphic-fetch'
import config from '../config/config'

const apiFetch = (url,settings) =>{
  if(config.isDummy){
    url = "../../stub"+url+".json"
  }else{
    url = config.host+url
  }
  const setting = Object.assign({},settings)
  return new Promise(function(resolve,reject){
      fetch(url,{}).then(function(response){
        resolve(response.json());
      }).then(function(error) {
        console.log(error);
        reject();
    });
  });
}

export default apiFetch
