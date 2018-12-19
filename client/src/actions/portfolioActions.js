import axios from 'axios'

import { GET_PORTFOLIOS } from './types'

export const getPortfolios = () => dispatch => {
    const axiosOptions = {
        method: 'get',
        url: `/api/portfolio`
    }

    axios(axiosOptions).then(res => {
        dispatch({
            type: GET_PORTFOLIOS,
            payload: {
                results: res.data
            }
        })
    })
}
