import React from 'react'
import PropTypes from 'prop-types'
import ProgressiveImage from 'react-progressive-image-loading'

const ImageHolder = ({ url, classes }) => {
    return (
        <div className={`card-portfolio__image-holder ${classes}`}>
            <ProgressiveImage
                preview={url}
                src={url}
                render={(src, style) => (
                    <img
                        src={src}
                        alt=""
                        style={style}
                        className="responsive-img"
                    />
                )}
            />
        </div>
    )
}

ImageHolder.defaultProps = {
    url: `${window.location.origin}/images/assets/image-not-found.png`,
    classes: ''
}

ImageHolder.propTypes = {
    url: PropTypes.string,
    classes: PropTypes.string
}

export default ImageHolder
