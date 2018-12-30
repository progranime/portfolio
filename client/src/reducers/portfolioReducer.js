import {
    GET_PORTFOLIOS,
    GET_PORTFOLIO,
    GET_MORE_PORTFOLIOS,
    RESET_PORTFOLIOS
} from '../actions/types'

const initialState = {
    results: [],
    result: {}
}

const portfolioReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_PORTFOLIOS:
            return {
                ...state,
                results: payload.results
            }
        case GET_PORTFOLIO:
            return {
                ...state,
                result: payload.result
            }
        case GET_MORE_PORTFOLIOS:
            return {
                ...state,
                results: payload.results
            }
        case RESET_PORTFOLIOS:
            return {
                ...state,
                results: payload.results
            }
        default:
            return state
    }
}

export default portfolioReducer
