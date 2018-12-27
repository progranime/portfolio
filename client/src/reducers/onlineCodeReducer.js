import { GET_ONLINE_CODES } from '../actions/types'

const initialState = {
    results: []
}

export const onlineCodeReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ONLINE_CODES:
            return {
                ...state,
                results: payload.results
            }
        default:
            return state
    }
}

export default onlineCodeReducer
