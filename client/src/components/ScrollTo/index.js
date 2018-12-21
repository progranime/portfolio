import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Index extends Component {
    componentDidMount() {
        const { x, y } = this.props

        window.scrollTo({
            top: y,
            left: x,
            behavior: 'smooth'
        })
    }
    render() {
        const { children } = this.props
        return <div>{children}</div>
    }
}

Index.defaultProps = {
    x: 0,
    y: 0
}

Index.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number
}

export default Index
