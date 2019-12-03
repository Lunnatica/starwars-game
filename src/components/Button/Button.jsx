import React from "react"

function Button(props) { // receives id, text and callback for onClick
    return (
        <button id={props.id} onClick={props.callback}>{props.text}</button>
    )
}

export default Button