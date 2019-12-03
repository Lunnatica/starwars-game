import React from "react"
import Button from "../Button/Button"

function PlayActions() {
    return (
        <div className="PlayActions">
            <p id="gameDescription">Choose a resource to fight...</p>
            <Button id="playWithPeopleButton" callback={() => alert("Battle with people")} text="Start battle! (People)"/>
            <Button id="playWithStarshipsButton" callback={() => alert("Battle with starships")} text="Start battle! (Starships)"/>
        </div>
    )
}

export default PlayActions