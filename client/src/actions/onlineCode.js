import axios from 'axios'

import { GET_ONLINE_CODES } from './types'

export const getOnlineCodes = () => dispatch => {
    const axiosOptions = {
        method: 'get',
        url: `/api/onlineCode/`
    }

    axios(axiosOptions).then(res => {
        dispatch({
            type: GET_ONLINE_CODES,
            payload: {
                results: res.data
            }
        })
    })
}
