import React from "react"
import Score from "../Score/Score"
import { useSelector } from "react-redux"

function GameResults() {
    const {winner, scoreP1, scoreP2} = useSelector(state => state.players)
    
    const CurrentGameResults = () => winner === "draw" ? 
                    <div id='CurrentGameResults'>Draw - no winner this time!</div> :
                    <div id='CurrentGameResults'>The winner in this game was... {winner}</div>

    return (
        <div className="GameResults">
            {
                winner ? 
                <div>
                    <CurrentGameResults />
                    <div className="scoresContainer">
                        <Score id="P1" count={scoreP1}/>
                        <Score id="P2" count={scoreP2} />
                    </div>
                </div>
                :null
            }
            
        </div>
    )
}

export default GameResults