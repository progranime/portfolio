import React, { Component } from 'react'

import { Banner } from '../../components'

class Index extends Component {
    componentDidMount() {
        window.document.title = `Jeremy's Portfolio - Home`
    }
    render() {
        return (
            <div className="main-container main-container--fluid">
                <Banner
                    backgroundSrc={`${
                        window.location.origin
                    }/images/assets/workplace.jpg`}
                    title="Hi, I'm Jeremy Espinosa"
                    description="Front End Developer with more than a year of experience, <br /> 
                    and also experience in Back End Technologies 
                    specialize in PHP and NodeJS."
                    link="/portfolio"
                    linkText="See My Portfolio"
                />
            </div>
        )
    }
}

export default Index
