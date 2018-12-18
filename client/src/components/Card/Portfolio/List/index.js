import React from 'react'
import { Link } from 'react-router-dom'

const Index = () => {
    return (
        <div className="card-portfolio row">
            <div className="card-portfolio__container col s12 m6">
                <div className="card-portfolio__detail">
                    <p className="title">Business Card Generator</p>
                    <p className="description">Automation of card shit</p>
                </div>
                <ul className="card-portfolio__list">
                    <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </li>
                    <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </li>
                    <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </li>
                    <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </li>
                </ul>

                <Link
                    to={`/portfolio/1/view`}
                    className="btn-small waves-effect waves-light"
                >
                    See More
                </Link>

                <p>Technolgies:</p>
                <ul className="card-portfolio__badge">
                    <li>
                        <span className="new badge">React</span>
                    </li>
                    <li>
                        <span className="new badge">React</span>
                    </li>
                    <li>
                        <span className="new badge">React</span>
                    </li>
                </ul>
            </div>
            <div className="card-portfolio__container col s12 m6">
                <div className="card-portfolio__image-holder">
                    <img
                        src={`${
                            window.location.origin
                        }/images/assets/workplace.jpg`}
                        alt=""
                        className="responsive-img"
                    />
                </div>
            </div>
        </div>
    )
}

export default Index
