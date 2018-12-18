import React, { Component } from 'react'

import PortfolioList from '../../containers/Portfolio/List'

class Index extends Component {
    render() {
        return (
            <div className="main-container p-3">
                <h3>Portfolio</h3>
                <PortfolioList />
            </div>
        )
    }
}

export default Index
