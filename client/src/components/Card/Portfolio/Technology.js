import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Technology = ({ technology }) => {
    return (
        <Fragment>
            <p>Technolgies:</p>
            <ul className="card-portfolio__technology">
                {technology.map((result, index) => (
                    <li key={index}>
                        <span className="new badge">{result}</span>
                    </li>
                ))}
            </ul>
        </Fragment>
    )
}

Technology.propTypes = {
    technology: PropTypes.array
}

export default Technology
