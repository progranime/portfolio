import React from 'react'

const ImageHolder = () => {
    return (
        <div className="navbar__image-holder">
            <img
                src={`${window.location.origin}/images/assets/dp.jpg`}
                alt=""
            />
        </div>
    )
}

export default ImageHolder
