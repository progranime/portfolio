import axios from 'axios'

import { SEND_EMAIL } from './types'

export const sendEmail = payload => dispatch => {
    const axiosOptions = {
        method: 'post',
        url: `/api/mail/send`,
        data: payload
    }

    axios(axiosOptions).then(res => {
        dispatch({
            type: SEND_EMAIL,
            payload: {
                hasSent: res.data.hasSent
            }
        })
    })
}
