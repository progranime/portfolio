import { SEND_EMAIL } from '../actions/types'

const initialState = {
    hasSent: false
}

const mailReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SEND_EMAIL: {
            return {
                ...state,
                hasSent: payload.hasSent
            }
        }
        default:
            return state
    }
}

export default mailReducer
