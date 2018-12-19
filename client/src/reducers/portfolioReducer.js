import { GET_PORTFOLIOS, GET_PORTFOLIO } from '../actions/types'

const initialState = {
    results: [],
    result: {}
}

export default function(state = initialState, { type, payload }) {
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
        default:
            return state
    }
}
