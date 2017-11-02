import axios from 'axios'

export const ADD_OPTION = 'ADD_OPTION';
export const ADD_VOTE = 'ADD_VOTE';

export const addOption = (data) => {
  return (dispatch) => {
    dispatch({ type: ADD_VOTE, payload: data });
  }
}

export const editVote = (data, router) => {
  return (dispatch) => {
    axios.put(`http://localhost:3001/votes/${data._id}`,data).then(function(response){
      console.log(response.data);
      router.history.push("/home")
    })
    .catch(function(err){
      console.log(err);
    });
  }
}
