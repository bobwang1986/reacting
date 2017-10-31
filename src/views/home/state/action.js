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