import React from "react"
import PlayActions from "../PlayActions/PlayActions"
import GameResults from "../GameResults/GameResults"
import CardsArea from "../CardsArea/CardsArea"


function PlayArea() {
    return (
        <div className="PlayArea">
            <PlayActions />
            <GameResults />
            <CardsArea />
        </div>
    )
}

export default PlayArea