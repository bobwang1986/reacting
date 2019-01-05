import { ON_SUBMIMT } from './action'
const initialState = {username: '', password: '',isLogonSuccess:false}
const login = (state = initialState, action) => {
    switch (action.type) {
        case ON_SUBMIMT:
            return {...state, isLogonSuccess:action.isLogonSuccess}
        default:
            return state
    }
}
export default login
