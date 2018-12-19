import React, { Component } from 'react'

import { CardPortfolio } from '../../../components'
import CardPortfolioWrapper from '../../../components/Card/Portfolio/Wrapper'

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
