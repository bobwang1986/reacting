import { ON_SUBMIMT } from '../actions/login'
const initialState = {}
const login = (state = initialState, action) => {
    switch (action.type) {
        case ON_SUBMIMT:
            return {...state, userName: 'leo' }
        default:
            return state
    }
}
export default login