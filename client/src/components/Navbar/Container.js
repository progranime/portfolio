import React from 'react'
import PropTypes from 'prop-types'

const Container = ({ children }) => {
    return <div className="navbar__container">{children}</div>
}

Container.propTypes = {
    children: PropTypes.node.isRequired
}

export default Container
