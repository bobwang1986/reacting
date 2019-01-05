import { ON_GETSTOCKLIST } from './action'
const initialState = {stockList: []}
const home = (state = initialState, action) => {
    switch (action.type) {
        case ON_GETSTOCKLIST:
            return {...state, stockList:action.stockList}
        default:
            return state
    }
}
export default home
