import React from 'react'
import PropTypes from 'prop-types'

const Wrapper = ({ children }) => {
    return <div className="card-portfolio__wrapper">{children}</div>
}

Wrapper.propTypes = {
    children: PropTypes.node.isRequired
}

export default Wrapper
