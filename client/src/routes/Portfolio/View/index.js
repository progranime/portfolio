import React, { Component } from 'react'
import PortfolioView from '../../../containers/Portfolio/View'

class Index extends Component {
    render() {
        return (
            <div className="main-container">
                <PortfolioView match={this.props.match} />
            </div>
        )
    }
}

export default Index
