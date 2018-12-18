import React, { Component } from 'react'

import { CardPortfolio, CardPortfolioWrapper } from '../../../components'

class Index extends Component {
    render() {
        return (
            <div>
                <CardPortfolioWrapper>
                    <CardPortfolio />
                    <CardPortfolio />
                    <CardPortfolio />
                    <CardPortfolio />
                </CardPortfolioWrapper>
            </div>
        )
    }
}

export default Index
