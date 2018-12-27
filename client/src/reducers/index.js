import { combineReducers } from 'redux'
import portfolioReducer from './portfolioReducer'
import mailReducer from './mailReducer'
import onlineCodeReducer from './onlineCodeReducer'

export default combineReducers({
    portfolio: portfolioReducer,
    mail: mailReducer,
    onlineCode: onlineCodeReducer
})
