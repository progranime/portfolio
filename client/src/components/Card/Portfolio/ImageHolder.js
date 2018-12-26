import React from 'react'
import PropTypes from 'prop-types'
import ProgressiveImage from 'react-progressive-image-loading'

const ImageHolder = ({ index, url, classes, handleLightbox }) => {
    return (
        <div
            className={`card-portfolio__image-holder ${classes}`}
            onClick={handleLightbox.bind(this, {
                index
            })}
        >
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
    index: 0,
    url: `${window.location.origin}/images/assets/image-not-found.png`,
    classes: '',
    handleLightbox: () => {}
}

ImageHolder.propTypes = {
    index: PropTypes.number,
    url: PropTypes.string,
    classes: PropTypes.string,
    handleLightbox: PropTypes.func
}

export default ImageHolder
