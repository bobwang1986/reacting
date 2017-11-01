import axios from 'axios'

export const GET_VOTELIST = 'GET_VOTELIST';
export const getVoteList = () => {
  return (dispatch) => {
    axios.get("http://localhost:3001/votes").then(function(response){
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