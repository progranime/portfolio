import React from 'react'
import PropTypes from 'prop-types'

const Profile = ({ children }) => {
    return <div className="navbar__profile">{children}</div>
}

Profile.propTypes = {
    children: PropTypes.node.isRequired
}

export default Profile
