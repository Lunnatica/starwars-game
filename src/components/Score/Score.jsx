import React from "react"

function Score(props) {
    return (
        <div className="Score" id={props.id}>
            {props.id} score is {props.count}
        </div>
    )
}

export default Score