import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Index = ({ size }) => {
    return (
        <div className="center-align">
            <img
                src={`${window.location.origin}/images/icons/spinner.gif`}
                alt=""
                className={classnames('spinner', {
                    'spinner--xs': size === 'xs',
                    'spinner--sm': size === 'sm',
                    'spinner--md': size === 'md',
                    'spinner--lg': size === 'lg',
                    'spinner--xl': size === 'xl'
                })}
            />
        </div>
    )
}

Index.propTypes = {
    size: PropTypes.string
}

Index.defaultProps = {
    size: 'xs'
}

export default Index
