import React from "react"
import PlayActions from "../PlayActions/PlayActions"
import GameResults from "../GameResults/GameResults"
import GameCards from "../GameCards/GameCards"


function PlayArea() {
    return (
        <div className="PlayArea">
            <PlayActions />
            <GameResults />
            <GameCards />
        </div>
    )
}

export default PlayArea