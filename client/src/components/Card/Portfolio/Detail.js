import React from 'react'
import PropTypes from 'prop-types'

const Detail = ({ title, description }) => {
    return (
        <div className="card-portfolio__detail">
            <p className="title">{title}</p>
            <p className="description">{description}</p>
        </div>
    )
}

Detail.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
}

export default Detail
