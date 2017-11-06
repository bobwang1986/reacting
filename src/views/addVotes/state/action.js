import axios from 'axios'
import config from '../../../config/config'

export const ADD_OPTION = 'ADD_OPTION';
export const ADD_VOTE = 'ADD_VOTE';

export const addOption = (data) => {
  return (dispatch) => {
    dispatch({ type: ADD_VOTE, payload: data });
  }
}

export const addVote = (data, router) => {
  return (dispatch) => {
    axios(`${config.votes}/votes`,{
      method: "POST",
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcGVuSWQiOiJkMDVlNTY3MC04ZDFmLTQ3ZjktODVlZC04NGJmMWRiNTYzNjkiLCJzdGFmZklkIjoiYWRtaW4iLCJpYXQiOjE1MDk0NjAyODl9.zYGwk5sUnlhlQNGNxsnhmzUxfZATBAdDDrmb3yoKEpE"
      },
      data: data
    }).then(function(response){
      console.log(response.data);
      router.history.push("/home")
    })
    .catch(function(err){
      console.log(err);
    });
  }
}
