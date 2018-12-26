import React from 'react'
import PropTypes from 'prop-types'

const Index = ({ imgSrc, title, link, linkText, description }) => {
    return (
        <div className="card">
            <div className="card-image">
                <img src="images/sample-1.jpg" />
                <span className="card-title">Card Title</span>
                <a className="btn-floating halfway-fab waves-effect waves-light red">
                    <i className="material-icons">add</i>
                </a>
            </div>
            <div className="card-content">
                <p>
                    I am a very simple card. I am good at containing small bits
                    of information. I am convenient because I require little
                    markup to use effectively.
                </p>
            </div>
        </div>
    )
}

Index.defaultProps = {
    imgSrc: '',
    title: '',
    link: '#',
    linkText: '',
    description: ''
}

Index.propTypes = {
    imgSrc: PropTypes.string,
    title: PropTypes.string,
    link: PropTypes.string,
    linkText: PropTypes.string,
    description: PropTypes.string
}

export default Index
