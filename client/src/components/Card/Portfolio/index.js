import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import CardPortfolioContainer from './Container'
import CardPortfolioDetail from './Detail'
import CardPortfolioList from './List'
import CardPortfolioTechnology from './Technology'
import CardPortfolioImageHolder from './ImageHolder'

const Index = ({
    id,
    title,
    description,
    technology,
    showGallery,
    showSeeMore
}) => {
    return (
        <Fragment>
            <div className="card-portfolio row">
                <CardPortfolioContainer classes="col s12 m6">
                    <CardPortfolioDetail
                        title={title}
                        description={description}
                    />
                    <CardPortfolioList />

                    {showSeeMore && (
                        <Link
                            to={`/portfolio/${id}/view`}
                            className="btn-small waves-effect waves-light mb-2"
                        >
                            See More
                        </Link>
                    )}

                    <CardPortfolioTechnology technology={technology} />
                </CardPortfolioContainer>

                <CardPortfolioContainer classes="col s12 m6">
                    <Link to={`/portfolio/${id}/view`}>
                        <CardPortfolioImageHolder
                            url={`${
                                window.location.origin
                            }/images/assets/workplace.jpg`}
                        />
                    </Link>
                </CardPortfolioContainer>
            </div>

            {showGallery && (
                <div className="card-portfolio">
                    <CardPortfolioContainer>
                        <CardPortfolioImageHolder
                            url={`${
                                window.location.origin
                            }/images/assets/workplace.jpg`}
                        />
                        <CardPortfolioImageHolder
                            url={`${
                                window.location.origin
                            }/images/assets/workplace.jpg`}
                        />
                    </CardPortfolioContainer>
                </div>
            )}
        </Fragment>
    )
}

Index.defaultProps = {
    showGallery: false,
    showSeeMore: true
}

Index.propTypes = {
    showGallery: PropTypes.bool,
    showSeeMore: PropTypes.bool
}

export default Index
