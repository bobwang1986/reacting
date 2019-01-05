import { ON_BUYSTOCK } from './action'
const initialState = {isBuyDeal:false}
const buy = (state = initialState, action) => {
    switch (action.type) {
        case ON_BUYSTOCK:
            return {...state, isBuyDeal:action.isBuyDeal}
        default:
            return state
    }
}
export default buy
