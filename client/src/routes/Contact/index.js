import React, { Component } from 'react'

import Contact from '../../containers/Contact'

class Index extends Component {
    componentDidMount() {
        window.document.title = `Jeremy's Portfolio - Contact`
    }

    render() {
        return (
            <div className="main-container">
                <Contact />
            </div>
        )
    }
}

export default Index
