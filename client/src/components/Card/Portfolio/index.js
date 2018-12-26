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
    position,
    technology,
    task,
    gallery,
    showGallery,
    showSeeMore,
    handleLightbox
}) => {
    return (
        <Fragment>
            <div className="card-portfolio row">
                <CardPortfolioContainer classes="col s12 m6">
                    <CardPortfolioDetail
                        title={title}
                        description={description}
                        position={position}
                    />
                    <CardPortfolioList task={task} />

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
                            url={`${window.location.origin}${gallery[0]}`}
                        />
                    </Link>
                </CardPortfolioContainer>
            </div>

            {showGallery && (
                <div className="card-portfolio">
                    <CardPortfolioContainer>
                        {gallery.map((result, index) => (
                            <CardPortfolioImageHolder
                                key={index}
                                index={index}
                                url={`${window.location.origin}${result}`}
                                classes="card-portfolio__image-holder--fullview"
                                handleLightbox={handleLightbox}
                            />
                        ))}
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
