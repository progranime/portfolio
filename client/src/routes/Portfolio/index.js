import React, { Component } from 'react'

import PortfolioList from '../../containers/Portfolio/List'

class Index extends Component {
    componentDidMount() {
        window.document.title = `Jeremy's Portfolio - Portfolio`
    }

    render() {
        return (
            <div className="main-container">
                <h4>Portfolio</h4>
                <PortfolioList />
            </div>
        )
    }
}

export default Index
