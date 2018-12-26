import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Lightbox from 'react-image-lightbox'

import { getPortfolio } from '../../../actions/portfolioActions'
import {
    CardPortfolio,
    Spinner,
    FloatAction,
    ScrollTo
} from '../../../components'
import FloatActionWrapper from '../../../components/FloatAction/Wrapper'

class Index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            photoIndex: 0,
            lightboxIsOpen: false
        }
    }

    handleLightbox = ({ index }) => {
        this.setState({
            photoIndex: index,
            lightboxIsOpen: !this.state.lightboxIsOpen
        })
    }

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
                handleLightbox={this.handleLightbox}
            />
        )
    }

    renderLightbox() {
        const { portfolio } = this.props
        const { photoIndex, lightboxIsOpen } = this.state

        return (
            lightboxIsOpen && (
                <Lightbox
                    mainSrc={portfolio.result.gallery[photoIndex]}
                    nextSrc={
                        portfolio.result.gallery[
                            (photoIndex + 1) % portfolio.result.gallery.length
                        ]
                    }
                    prevSrc={
                        portfolio.result.gallery[
                            (photoIndex + portfolio.result.gallery.length - 1) %
                                portfolio.result.gallery.length
                        ]
                    }
                    onCloseRequest={() =>
                        this.setState({ lightboxIsOpen: false })
                    }
                    onMovePrevRequest={() =>
                        this.setState({
                            photoIndex:
                                (photoIndex +
                                    portfolio.result.gallery.length -
                                    1) %
                                portfolio.result.gallery.length
                        })
                    }
                    onMoveNextRequest={() =>
                        this.setState({
                            photoIndex:
                                (photoIndex + 1) %
                                portfolio.result.gallery.length
                        })
                    }
                />
            )
        )
    }

    render() {
        const { portfolio } = this.props

        return (
            <ScrollTo>
                {Object.keys(portfolio.result).length !== 0 ? (
                    <Fragment>
                        {this.renderCardPortfolio()}
                        {this.renderLightbox()}
                    </Fragment>
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
