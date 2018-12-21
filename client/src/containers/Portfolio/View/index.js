import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getPortfolio } from '../../../actions/portfolioActions'
import {
    CardPortfolio,
    Spinner,
    FloatAction,
    ScrollTo
} from '../../../components'
import FloatActionWrapper from '../../../components/FloatAction/Wrapper'

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
                position={portfolio.result.position}
                task={portfolio.result.task}
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
            <ScrollTo>
                {Object.keys(portfolio.result).length !== 0 ? (
                    this.renderCardPortfolio()
                ) : (
                    <Spinner size="md" />
                )}

                <FloatActionWrapper classes="float-action__wrapper--left">
                    <FloatAction>
                        <Link
                            to="/portfolio"
                            className="btn-floating waves-effect waves-light grey darken-1"
                        >
                            <i className="material-icons">
                                keyboard_arrow_left
                            </i>
                        </Link>
                    </FloatAction>
                </FloatActionWrapper>
            </ScrollTo>
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
