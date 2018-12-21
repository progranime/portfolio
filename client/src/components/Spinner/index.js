import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Index = ({ size, text, classes }) => {
    return (
        <div className={`spinner ${classes}`}>
            <img
                src={`${window.location.origin}/images/icons/spinner.gif`}
                alt=""
                className={classnames('', {
                    'spinner--xs': size === 'xs',
                    'spinner--sm': size === 'sm',
                    'spinner--md': size === 'md',
                    'spinner--lg': size === 'lg',
                    'spinner--xl': size === 'xl'
                })}
            />
            {text}
        </div>
    )
}

Index.propTypes = {
    size: PropTypes.string,
    text: PropTypes.string,
    classes: PropTypes.string
}

Index.defaultProps = {
    size: 'xs',
    text: '',
    classes: ''
}

export default Index
