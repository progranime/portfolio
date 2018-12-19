import React from 'react'
import PropTypes from 'prop-types'

const List = ({ task }) => {
    return (
        <ul className="card-portfolio__list">
            {task.map((result, index) => (
                <li key={index}>{result}</li>
            ))}
        </ul>
    )
}

List.propTypes = {
    task: PropTypes.array.isRequired
}

export default List
