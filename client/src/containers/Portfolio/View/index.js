import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getPortfolio } from '../../../actions/portfolioActions'
import { CardPortfolio, Spinner } from '../../../components'

class Index extends Component {
    componentDidMount() {
        const { match } = this.props
        this.props.getPortfolio({ id: match.params.id })
    }

    renderCardPortfolio() {
        const { portfolio } = this.props

        return (
            <CardPortfolio
                key={portfolio.result._id}
                id={portfolio.result._id}
                title={portfolio.result.title}
                description={portfolio.result.description}
                technology={portfolio.result.technology.split(',')}
                gallery={portfolio.result.gallery}
                showGallery={true}
                showSeeMore={false}
            />
        )
    }

    render() {
        const { portfolio } = this.props

        return (
            <div>
                {Object.keys(portfolio.result).length !== 0 ? (
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
    getPortfolio
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index)
