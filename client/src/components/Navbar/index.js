import React from 'react'
import { NavLink } from 'react-router-dom'

const Index = () => {
    return (
        <div className="navbar">
            <div className="navbar__container">
                {/* <div className="navbar__menu">
                    <span />
                    <span />
                    <span />
                </div> */}
                <div className="navbar__profile">
                    <div className="navbar__image-holder">
                        <img
                            src={`${
                                window.location.origin
                            }/images/assets/dp.png`}
                            alt=""
                        />
                    </div>
                    <div className="navbar__details">
                        <p className="title">Jeremy Espinosa</p>
                        <p className="subtitle">Web Developer</p>
                    </div>
                </div>
                <ul className="navbar__list">
                    <li>
                        <i className="tiny material-icons">home</i>
                        <NavLink exact to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <i className="tiny material-icons">collections</i>
                        <NavLink exact to="/portfolio">
                            Portfolio
                        </NavLink>
                    </li>
                    <li>
                        <i className="tiny material-icons">assessment</i>
                        <NavLink exact to="/resume">
                            Resume
                        </NavLink>
                    </li>
                    <li>
                        <i className="tiny material-icons">contacts</i>
                        <NavLink exact to="/contact">
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Index
