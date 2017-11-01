import { ADD_OPTION, ADD_VOTE} from './action'
const initialState = {}
const addVotes = (state = initialState, action) => {
    switch (action.type) {
        case ADD_OPTION:
            return {...state, addOption: action.payload}
        case ADD_VOTE:
            return {...state, addVote: action.payload}
        default:
            return state
    }
}
export default addVotes