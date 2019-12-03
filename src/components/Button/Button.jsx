import React from "react"

function Button(props) { // receives id, text and callback for onClick
    return (
        <button id={props.id} 
            className={props.className ? props.className : "Button"} 
            onClick={props.callback } disabled={props.isDisabled}>
                {props.text}
        </button>
    )
}

export default Button