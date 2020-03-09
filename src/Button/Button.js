import React from 'react';
import './Button.css'

const Button = (props) => {
    let classlist = "";

let types = ["white", ]

if (types.includes(props.type)) {
    classList += ` button-$props.type}`
}

    return <button className={classList} onClick={props.onClick}>
        {props.label}
    </button>
}

export default Button;