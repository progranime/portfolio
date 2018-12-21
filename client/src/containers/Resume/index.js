import React, { Component } from 'react'

import { Resume, FloatAction } from '../../components'
import FloatActionWrapper from '../../components/FloatAction/Wrapper'

class Index extends Component {
    render() {
        return (
            <div>
                <FloatActionWrapper>
                    <FloatAction>
                        <a
                            className="btn-floating  waves-effect waves-light red"
                            href={`${
                                window.location.origin
                            }/docs/jeremy-espinosa-resume.pdf`}
                            download
                        >
                            <i className="material-icons">file_download</i>
                        </a>
                    </FloatAction>
                </FloatActionWrapper>
                <Resume />
            </div>
        )
    }
}

export default Index
