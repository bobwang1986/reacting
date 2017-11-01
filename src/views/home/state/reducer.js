import { GET_VOTELIST, VOTELIST_ID } from './action'
const initialState = {}
const home = (state = initialState, action) => {
    switch (action.type) {
        case GET_VOTELIST:
            return {...state, payload: action.payload}
        case VOTELIST_ID:
            return {...state, payload: action.payload}
        default:
            return state
    }
}
export default home
