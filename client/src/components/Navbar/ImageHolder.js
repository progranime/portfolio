import React from 'react'
import { Link } from 'react-router-dom'

const ImageHolder = () => {
    return (
        <div className="navbar__image-holder">
            <Link to="/">
                <img
                    src={`${window.location.origin}/images/assets/dp.jpg`}
                    alt=""
                />
            </Link>
        </div>
    )
}

export default ImageHolder
