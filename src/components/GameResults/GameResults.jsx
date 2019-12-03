import React from "react"
import Score from "../Score/Score"

function GameResults() {
    const currentWinner = "You"
    const CurrentGameResults = () => <p id='currentGameResults'>The winner in this game was... {currentWinner}</p>
    return (
        <div>
            <CurrentGameResults />
            <Score id="P1" count={1}/>
            <Score id="P2" count={1} />
        </div>
    )
}

export default GameResults