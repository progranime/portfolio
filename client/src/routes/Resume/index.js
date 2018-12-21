import React, { Component } from 'react'
import Resume from '../../containers/Resume'

class Index extends Component {
    componentDidMount() {
        window.document.title = `Jeremy's Portfolio - Resume`
    }

    render() {
        return (
            <div className="main-container">
                <Resume />
            </div>
        )
    }
}

export default Index
