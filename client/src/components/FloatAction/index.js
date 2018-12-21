import React from 'react'
import PropTypes from 'prop-types'

const Index = ({ children }) => {
    return (
        <div className="float-action">
            <div className="float-action__container">{children}</div>
        </div>
    )
}

Index.propTypes = {
    children: PropTypes.node.isRequired
}

export default Index
