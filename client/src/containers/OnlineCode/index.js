import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getOnlineCodes } from '../../actions/onlineCode'
import { CardFab, Spinner } from '../../components'
import CardFabWrapper from '../../components/Card/Fab/Wrapper'

export class Index extends Component {
    componentDidMount() {
        this.props.getOnlineCodes()
    }

    renderCard() {
        const { onlineCode } = this.props

        const cards = onlineCode.results.map(result => (
            <CardFab
                key={result._id}
                imgSrc={`${window.location.origin}${result.imgSrc}`}
                title={result.title}
                link={result.link}
                description={result.description}
            />
        ))

        return <CardFabWrapper>{cards}</CardFabWrapper>
    }

    render() {
        const { onlineCode } = this.props
        return (
            <div>
                <h4>Online Code</h4>
                {Object.keys(onlineCode.results).length ? (
                    this.renderCard()
                ) : (
                    <Spinner size="md" />
                )}
            </div>
        )
    }
}

Index.propTypes = {
    getOnlineCodes: PropTypes.func.isRequired,
    onlineCode: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    onlineCode: state.onlineCode
})

const mapDispatchToProps = {
    getOnlineCodes
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index)
