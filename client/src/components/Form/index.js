import React from 'react'

const Index = ({ onSubmit, classes, children }) => {
    return (
        <form onSubmit={onSubmit} className={classes}>
            {children}
        </form>
    )
}

export default Index
