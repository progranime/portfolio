import axios from 'axios'

import { GET_PORTFOLIOS, GET_PORTFOLIO } from './types'

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

export const getPortfolio = payload => dispatch => {
    const axiosOptions = {
        method: 'get',
        url: `/api/portfolio/${payload.id}`
    }

    axios(axiosOptions).then(res => {
        dispatch({
            type: GET_PORTFOLIO,
            payload: {
                result: res.data
            }
        })
    })
}
