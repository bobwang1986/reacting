import { GET_VOTELIST } from './action'
const initialState = {}
const home = (state = initialState, action) => {
    switch (action.type) {
        case GET_VOTELIST:
            return {...state, payload: action.payload}
        default:
            return state
    }
}
export default home
