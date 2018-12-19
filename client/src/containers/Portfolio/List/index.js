import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getPortfolios } from '../../../actions/portfolioActions'
import { CardPortfolio, Spinner } from '../../../components'
import CardPortfolioWrapper from '../../../components/Card/Portfolio/Wrapper'

class Index extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getPortfolios()
    }

    renderCardPortfolio() {
        const { portfolio } = this.props

        const portfolios = portfolio.results.map(portfolio => {
            return (
                <CardPortfolio
                    key={portfolio._id}
                    id={portfolio._id}
                    title={portfolio.title}
                    description={portfolio.description}
                    technology={portfolio.technology.split(',')}
                />
            )
        })

        return <CardPortfolioWrapper>{portfolios}</CardPortfolioWrapper>
    }

    render() {
        const { portfolio } = this.props

        return (
            <div>
                {portfolio.results.length ? (
                    this.renderCardPortfolio()
                ) : (
                    <Spinner size="md" />
                )}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    portfolio: state.portfolio
})

const mapDispatchToProps = {
    getPortfolios
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index)
