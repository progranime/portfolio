import React, { Component } from 'react'

import { Banner } from '../../components'

class Index extends Component {
    componentDidMount() {
        window.document.title = `Jeremy's Portfolio - Home`
    }
    render() {
        return (
            <div className="main-container main-container--fluid">
                <Banner />
            </div>
        )
    }
}

export default Index
