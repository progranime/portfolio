import { combineReducers } from 'redux'
import portfolioReducer from './portfolioReducer'
import mailReducer from './mailReducer'

export default combineReducers({
    portfolio: portfolioReducer,
    mail: mailReducer
})
