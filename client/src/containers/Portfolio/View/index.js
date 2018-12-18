import React, { Component } from 'react'
import { CardPortfolio } from '../../../components'

class Index extends Component {
    render() {
        return (
            <div>
                <CardPortfolio showGallery={true} showSeeMore={false} />
            </div>
        )
    }
}

export default Index
