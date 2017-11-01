const initialState = {}
const report = (state = initialState, action) => {
    switch (action.type) {
        case "GET_RESULT":
            return {...state, payload: action.payload}
        default:
            return state
    }
}
export default report