import { ON_SELLSTOCK } from './action'
const initialState = {isSellDeal:false}
const sell = (state = initialState, action) => {
    switch (action.type) {
        case ON_SELLSTOCK:
            return {...state, isSellDeal:action.isSellDeal}
        default:
            return state
    }
}
export default sell
