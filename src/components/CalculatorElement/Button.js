import React from 'react'
import './button.css'

const Button = (props) => {
    const { bcolor, text, mulButton, callbackFnc, textColor="black" } = props
    return (
        <div className={'cal-button'} style={{backgroundColor: bcolor, width: 'calc(' + 25 * mulButton + '% + ' + (mulButton - 1) + 'px)'}} onClick={callbackFnc}>
            <span style={{color: textColor}}>{text}</span>
        </div>
    )
}

export default Button
