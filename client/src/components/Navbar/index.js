import React from 'react'
import { NavLink } from 'react-router-dom'

const Index = () => {
    return (
        <div className="navbar">
            <div className="navbar__container">
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
                <div className="navbar__list">
                    <NavLink exact to="/" className="navbar__list-item">
                        <i className="tiny material-icons">home</i>
                        <span className="title">Home</span>
                    </NavLink>
                    <NavLink
                        exact
                        to="/portfolio"
                        className="navbar__list-item"
                    >
                        <i className="tiny material-icons">collections</i>
                        <span className="title">Portfolio</span>
                    </NavLink>
                    <NavLink exact to="/resume" className="navbar__list-item">
                        <i className="tiny material-icons">assessment</i>
                        <span className="title">Resume</span>
                    </NavLink>
                    <NavLink exact to="/contact" className="navbar__list-item">
                        <i className="tiny material-icons">contacts</i>
                        <span className="title">Contact</span>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Index
