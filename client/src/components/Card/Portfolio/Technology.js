import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Technology = ({ technology }) => {
    return (
        <Fragment>
            <p>
                <strong>Technologies Used:</strong>
            </p>
            <ul className="card-portfolio__technology">
                {technology.map((result, index) => (
                    <li key={index}>
                        <span className="new badge deep-orange lighten-1">
                            {result}
                        </span>
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
