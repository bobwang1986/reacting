import axios from 'axios';

export const GET_RESULT = 'GET_RESULT';

export const getResult = (voteID) => {
  return (dispatch) => {
    axios.get(`http://localhost:3001/votes/${voteID}`).then(function (response) {
      //console.log(response.data);
      return response.data;
    }).catch(function (error) {
      console.log(error);
    });
  }
 }
