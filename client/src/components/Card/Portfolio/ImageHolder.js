import React from 'react'
import PropTypes from 'prop-types'

const ImageHolder = ({ url }) => {
    return (
        <div
            className="card-portfolio__image-holder"
            style={{ backgroundImage: `url(${url})` }}
        />
    )
}

ImageHolder.defaultProps = {
    url: `${window.location.origin}/images/assets/image-not-found.png`
}

ImageHolder.propTypes = {
    url: PropTypes.string
}

export default ImageHolder
