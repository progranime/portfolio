import React from 'react'
import { NavLink } from 'react-router-dom'

const List = () => {
    return (
        <div className="navbar__list">
            <NavLink exact to="/" className="navbar__list-item">
                <i className="tiny material-icons">home</i>
                <span className="title">Home</span>
            </NavLink>
            <NavLink exact to="/portfolio" className="navbar__list-item">
                <i className="tiny material-icons">collections</i>
                <span className="title">Portfolio</span>
            </NavLink>
            <NavLink exact to="/online-code" className="navbar__list-item">
                <i className="tiny material-icons">code</i>
                <span className="title">Online Code</span>
            </NavLink>
            {/* <NavLink exact to="/resume" className="navbar__list-item">
                <i className="tiny material-icons">assessment</i>
                <span className="title">Resume</span>
            </NavLink> */}
            <NavLink exact to="/contact" className="navbar__list-item">
                <i className="tiny material-icons">contacts</i>
                <span className="title">Contact</span>
            </NavLink>
        </div>
    )
}

export default List
