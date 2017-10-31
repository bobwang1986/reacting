import { ON_SUBMIMT } from './action'
const initialState = {}
const login = (state = initialState, action) => {
    switch (action.type) {
        case ON_SUBMIMT:
            return {...state, payload: action.payload}
        default:
            return state
    }
}
export default login
