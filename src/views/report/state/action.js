import axios from 'axios';
import config from '../../../config/config'

export const GET_RESULT = 'GET_RESULT';

export const getResult = (voteID) => {
  return (dispatch) => {
    axios(`${config.votes}/votes/${voteID}?populate=all`,{
      method: "GET",
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcGVuSWQiOiJkMDVlNTY3MC04ZDFmLTQ3ZjktODVlZC04NGJmMWRiNTYzNjkiLCJzdGFmZklkIjoiYWRtaW4iLCJpYXQiOjE1MDk0NjAyODl9.zYGwk5sUnlhlQNGNxsnhmzUxfZATBAdDDrmb3yoKEpE"
      }}).then(function (response) {
        dispatch({ type: GET_RESULT, payload: response.data })
    }).catch(function (error) {
      console.log(error);
    });
  }
 }
