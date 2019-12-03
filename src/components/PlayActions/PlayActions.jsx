import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import Button from "../Button/Button"

function PlayActions() {
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    let peopleButtonClassName = state.swapiLists.people !== {} ? "Button" : "Button-disabled"
    let starshipsButtonClassName = state.swapiLists.starships !== {} ? "Button" : "Button-disabled"

    function getRandomResource(list) {
        const randomNumber = Math.floor(Math.random() * (list.count - 1))
        console.log(randomNumber)
        return list.results[randomNumber]
    }

    function play(gameType) {
        // get relevant list of resources to play
        let currentList = []
        if(gameType === "people") currentList = state.swapiLists.people  
        else currentList = state.swapiLists.starships

        if(currentList === {}) return // if no list yet, return 

        // get 2 cards from the list and update them in state to show them 

        const card1 = getRandomResource(currentList)
        const card2 = getRandomResource(currentList)

        console.log(card1,card2)
        // update cards
        // compare resources
        // select winner (update on state) and show winner on card and update counter
    }
    return (
        <div className="PlayActions">
            <p id="gameDescription">Choose a resource to fight...</p>
            <Button id="playWithPeopleButton" 
                className ={peopleButtonClassName} 
                callback={() =>  play("people") } 
                text="Start battle! (People)"
            />
            <Button id="playWithStarshipsButton" 
                className={starshipsButtonClassName} 
                callback={() => play("starships")} 
                text="Start battle! (Starships)"
            />
        </div>
    )
}

export default PlayActions