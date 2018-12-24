import React from 'react'
import PropTypes from 'prop-types'

const Index = ({
    label,
    id,
    name,
    type,
    placeholder,
    value,
    required,
    onChange
}) => {
    return (
        <div className="input-field">
            <input
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="validate"
                required={required}
            />
            {label && (
                <label htmlFor={id} className="active">
                    {label}
                </label>
            )}
        </div>
    )
}

Index.defaultProps = {
    required: false
}

Index.propTypes = {
    label: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    required: PropTypes.bool,
    onChange: PropTypes.func.isRequired
}

export default Index
