import React from 'react'
import PropTypes from 'prop-types'

const Index = ({ label, id, name, type, placeholder, value, onChange }) => {
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
            />
            {label && (
                <label htmlFor={id} className="active">
                    {label}
                </label>
            )}
        </div>
    )
}

Index.propTypes = {
    label: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
}

export default Index
