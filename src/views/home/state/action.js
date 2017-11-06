import axios from 'axios'
import config from '../../../config/config'


export const GET_VOTELIST = 'GET_VOTELIST';
export const getVoteList = () => {
  return (dispatch) => {
    axios.get(`${config.votes}/votes?populate=items`,{
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcGVuSWQiOiJkMDVlNTY3MC04ZDFmLTQ3ZjktODVlZC04NGJmMWRiNTYzNjkiLCJzdGFmZklkIjoiYWRtaW4iLCJpYXQiOjE1MDk0NjAyODl9.zYGwk5sUnlhlQNGNxsnhmzUxfZATBAdDDrmb3yoKEpE"
      }
    }).then(function(response){
      console.log(response.data);
      dispatch({ type: GET_VOTELIST, payload: response.data });
    })
    .catch(function(err){
      console.log(err);
    });
  }
} 

export const VOTELIST_ID = 'VOTELIST_ID';
export const votelistID = (id,list) => {
  const data = { 
    voteID: id,
    voteList: list
  }
  return (dispatch) => {
      dispatch({ type: VOTELIST_ID, payload: data });
  }
}  