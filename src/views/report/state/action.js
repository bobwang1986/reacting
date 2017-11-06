import axios from 'axios';
import config from '../../../config/config'

export const GET_RESULT = 'GET_RESULT';

export const getResult = (voteID) => {
  return (dispatch) => {
    axios.get(`${config.votes}votes/${voteID}`).then(function (response) {
      //console.log(response.data);
      return response.data;
    }).catch(function (error) {
      console.log(error);
    });
  }
 }
