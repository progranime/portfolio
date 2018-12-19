import React from 'react'
import PropTypes from 'prop-types'

const Detail = ({ title, description, position }) => {
    return (
        <div className="card-portfolio__detail">
            <p className="title">{title}</p>
            <p className="position">{position}</p>
            <p className="description">{description}</p>
        </div>
    )
}

Detail.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    position: PropTypes.string
}

export default Detail
