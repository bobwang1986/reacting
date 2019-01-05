import { ON_GETTRADELIST } from './action'
const initialState = {tradeInfoList:[]}
const trade = (state = initialState, action) => {
    switch (action.type) {
        case ON_GETTRADELIST:
            return {...state, tradeInfoList:action.tradeInfoList}
        default:
            return state
    }
}
export default trade
