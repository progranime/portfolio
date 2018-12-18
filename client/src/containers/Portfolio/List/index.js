import React, { Component } from 'react'

import { CardPortfolioList, CardPortfolioListWapper } from '../../../components'

class Index extends Component {
    render() {
        return (
            <div>
                Portfolio list
                <CardPortfolioListWapper>
                    <CardPortfolioList />
                    <CardPortfolioList />
                    <CardPortfolioList />
                    <CardPortfolioList />
                </CardPortfolioListWapper>
            </div>
        )
    }
}

export default Index
