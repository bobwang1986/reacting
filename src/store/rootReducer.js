import { combineReducers } from 'redux'
import login from '../views/login/state/reducer'
import home from '../views/home/state/reducer'
import trade from '../views/trade/state/reducer'
import buy from '../views/buy/state/reducer'
import sell from '../views/sell/state/reducer'


//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
    login,
    home,
    trade,
    buy,
    sell
})

export default rootReducer
