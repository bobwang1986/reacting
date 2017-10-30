import fetch from 'isomorphic-fetch'
import MD5 from 'md5'

export const ON_SUBMIMT = 'ON_SUBMIMT';

export const submit = (userInfo) => {
  return (dispatch) => {
    fetch('http://localhost:4000/authorize', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "staffId": "1",
        "password": MD5("1")
      })
    }).then(
      response => response.json()
      ).then((response) => {
        console.log(response)
        dispatch({ type: ON_SUBMIMT, payload: response });
      }).catch(error => console.log(error))
  }
} 
