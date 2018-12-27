import React from 'react'
import PropTypes from 'prop-types'

const Index = ({ imgSrc, title, link, linkIcon, description }) => {
    return (
        <div className="card card-fab">
            <div
                className="card-image"
                style={{ backgroundImage: `url(${imgSrc})` }}
            >
                <a
                    href={link}
                    className="btn-floating halfway-fab waves-effect waves-light red"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="material-icons">{linkIcon}</i>
                </a>
            </div>
            <div className="card-content">
                {title && <p className="card-title">{title}</p>}
                {description && <p>{description}</p>}
            </div>
        </div>
    )
}

Index.defaultProps = {
    imgSrc: `${window.location.origin}/images/assets/image-not-found.png`,
    title: '',
    link: '#',
    linkIcon: 'open_in_new',
    description: ''
}

Index.propTypes = {
    imgSrc: PropTypes.string,
    title: PropTypes.string,
    link: PropTypes.string,
    linkIcon: PropTypes.string,
    description: PropTypes.string
}

export default Index
