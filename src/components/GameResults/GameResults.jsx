import React from "react"
import Score from "../Score/Score"
import { useSelector } from "react-redux"

function GameResults() {
    const players = useSelector(state => state.players)
    const currentWinner = players.winner
    const CurrentGameResults = () => {
        const resultText = (currentWinner === "draw" ? 
                    <p>Draw - no winner this time!</p> : 
                    <p>The winner in this game was... {currentWinner}</p>)
        return (
            currentWinner ? 
                <p id='currentGameResults'>
                    {resultText}
                </p> : null
        )
    }
    return (
        <div>
            <CurrentGameResults />
            <Score id="P1" count={players.scoreP1}/>
            <Score id="P2" count={players.scoreP2} />
        </div>
    )
}

export default GameResults