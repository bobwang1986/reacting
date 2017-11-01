import { combineReducers } from 'redux'
import login from '../views/login/state/reducer'
import home from '../views/home/state/reducer'
import addVotes from '../views/addVotes/state/reducer'
import report from '../views/report/state/reducer'

//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
    login,
    home,
    addVotes,
    report
})

export default rootReducer
