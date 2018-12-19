import { GET_PORTFOLIOS } from '../actions/types'

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
        default:
            return state
    }
}
