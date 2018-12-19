import React from 'react'
import PropTypes from 'prop-types'

const ImageHolder = ({ url, classes }) => {
    return (
        <div
            className={`card-portfolio__image-holder ${classes}`}
            style={{ backgroundImage: `url(${url})` }}
        />
    )
}

ImageHolder.defaultProps = {
    url: `${window.location.origin}/images/assets/image-not-found.png`
}

ImageHolder.propTypes = {
    url: PropTypes.string,
    classes: PropTypes.string
}

export default ImageHolder
