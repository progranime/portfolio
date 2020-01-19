import axios from "axios"

import store from "../store"
import {
  GET_PORTFOLIOS,
  GET_PORTFOLIO,
  GET_MORE_PORTFOLIOS,
  RESET_PORTFOLIOS
} from "./types"

export const getPortfolios = () => dispatch => {
  const axiosOptions = {
    method: "get",
    url: `/api/portfolio`
  }

  axios(axiosOptions).then(res => {
    console.log("Data: ", res.data)
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
    method: "get",
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

export const getMorePortfolios = payload => dispatch => {
  const page = payload.page

  const axiosOptions = {
    method: "get",
    url: `/api/portfolio/page/${page}`
  }

  axios(axiosOptions).then(res => {
    // concat the previous data
    let results = store.getState().portfolio.results.concat(res.data)

    dispatch({
      type: GET_MORE_PORTFOLIOS,
      payload: {
        results
      }
    })
  })
}

export const resetPortfolios = payload => dispatch => {
  dispatch({
    type: RESET_PORTFOLIOS,
    payload: {
      results: []
    }
  })
}
