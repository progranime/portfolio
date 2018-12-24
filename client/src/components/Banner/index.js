import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Link } from 'react-router-dom'

const Index = ({ size, backgroundSrc, title, description, link, linkText }) => {
    let descriptionMarkup = { __html: description }

    return (
        <div
            className={classnames('banner', {
                'banner--fullscreen': size === 'fullscreen'
            })}
        >
            <div className="banner__container">
                <div
                    className="banner__image-holder"
                    style={{
                        backgroundImage: `url(${backgroundSrc})`
                    }}
                />
                <div className="banner__overlay" />
                <div className="banner__details">
                    {title && <p className="title">{title}</p>}
                    {description && (
                        <p
                            className="description"
                            dangerouslySetInnerHTML={descriptionMarkup}
                        />
                    )}

                    <div className="my-5">
                        <Link
                            to={link}
                            className="btn waves-effect waves-light"
                        >
                            {linkText}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

Index.defaultProps = {
    size: 'fullscreen',
    backgroundSrc: '',
    title: '',
    description: '',
    link: '',
    linkText: ''
}

Index.propTypes = {
    size: PropTypes.string,
    backgroundSrc: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
    linkText: PropTypes.string
}

export default Index
