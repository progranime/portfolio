import React from 'react'
import PropTypes from 'prop-types'

const Index = ({ label, id, name, placeholder, rows, value, onChange }) => {
    return (
        <div className="input-field">
            <textarea
                id={id}
                name={name}
                placeholder={placeholder}
                rows={rows}
                className="materialize-textarea"
                value={value}
                onChange={onChange}
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
    placeholder: PropTypes.string,
    rows: PropTypes.number,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
}

export default Index
