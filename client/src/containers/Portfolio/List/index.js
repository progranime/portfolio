import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getPortfolios } from '../../../actions/portfolioActions'
import { CardPortfolio, Spinner, ScrollTo } from '../../../components'
import CardPortfolioWrapper from '../../../components/Card/Portfolio/Wrapper'

class Index extends Component {
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
                    position={portfolio.position}
                    task={portfolio.task}
                    technology={portfolio.technology.split(',')}
                    gallery={portfolio.gallery}
                />
            )
        })

        return <CardPortfolioWrapper>{portfolios}</CardPortfolioWrapper>
    }

    render() {
        const { portfolio } = this.props

        return (
            <ScrollTo>
                {portfolio.results.length ? (
                    this.renderCardPortfolio()
                ) : (
                    <Spinner size="md" />
                )}
            </ScrollTo>
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
