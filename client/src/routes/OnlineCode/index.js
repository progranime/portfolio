import React, { Component } from 'react'

import OnlineCode from '../../containers/OnlineCode'

export class Index extends Component {
    componentDidMount() {
        window.document.title = `Jeremy's Portfolio - Online Code`
    }
    render() {
        return (
            <div className="main-container">
                <OnlineCode />
            </div>
        )
    }
}

export default Index
