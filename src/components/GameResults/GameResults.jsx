import React from "react"
import Score from "../Score/Score"
import { useSelector } from "react-redux"

function GameResults() {
    const {winner, scoreP1, scoreP2} = useSelector(state => state.players)
    
    const ResultText = () => (winner === "draw" ? 
                    <p>Draw - no winner this time!</p> : 
                    <p>The winner in this game was... {winner}</p>)

    const CurrentGameResults = () => winner ? 
                                    <div id='currentGameResults'><ResultText /></div> : 
                                    null
    return (
        <div>
            <CurrentGameResults />
            <Score id="P1" count={scoreP1}/>
            <Score id="P2" count={scoreP2} />
        </div>
    )
}

export default GameResults