import React from 'react'
import './display.css'

const Display = (props) => {
    const {num} = props
    return (
        <div className={'display'}>
            <span>{num}</span>
        </div>
    )
}

export default Display
