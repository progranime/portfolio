import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Link } from 'react-router-dom'

const Index = ({ size }) => {
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
                        backgroundImage: `url(${
                            window.location.origin
                        }/images/assets/workplace.jpg)`
                    }}
                />
                <div className="banner__overlay" />
                <div className="banner__details">
                    <p className="title">Hi, I'm Jeremy Espinosa</p>
                    <p className="description">
                        Front End Developer with more than a year of experience,{' '}
                        <br />
                        and also experience in Back End Technologies specialize
                        in PHP and NodeJS.
                    </p>

                    <div className="center-align my-5">
                        <Link
                            to="/portfolio"
                            className="btn waves-effect waves-light"
                        >
                            See My Portfolio
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

Index.defaultProps = {
    size: 'fullscreen'
}

Index.propTypes = {
    size: PropTypes.string
}

export default Index
