import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import Button from "../Button/Button"
import { peopleURL, starshipsURL } from "../../constants"
import { setUpCard } from "../../redux/cards"
import { incrementScore, chooseWinner } from "../../redux/players"


function PlayActions() {
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    let peopleButtonClassName = state.swapiLists.people ? "Button" : "Button-disabled"
    let starshipsButtonClassName = state.swapiLists.starships ? "Button" : "Button-disabled"

    function fetchAndSetUpCard(cardNumber,url,idResource) {
        return fetch(`${url}${idResource}`)
            .then(res => res.json())
            .then(resource => dispatch(setUpCard(cardNumber, resource))            )          
    }

    async function setUpCardGame(cardNumber, currentUrl,currentCount) {
        const randomNumber = Math.floor(Math.random() * (currentCount - 1))
        return fetchAndSetUpCard(cardNumber,currentUrl,randomNumber)
    }

    function battle(gameType) {
        // select winner (update on state) and show winner on card and update counter
        let attr1 = ""
        let attr2 = ""

        if(gameType === "people") {
            attr1 = state.cards.card1.mass
            attr2 = state.cards.card2.mass
        } else {
            attr1 = state.cards.card1.crew
            attr2 = state.cards.card2.crew
        }
        if(attr1==="unknown" || attr2==="unknown" || attr1 === attr2) {
            dispatch(chooseWinner("draw"))
        }
        else if(parseFloat(attr1) > parseFloat(attr2)) {
            dispatch(incrementScore("P1"))
            dispatch(chooseWinner("P1"))
        }
        else if(parseFloat(attr1) < parseFloat(attr2)) {
            dispatch(incrementScore("P2"))
            dispatch(chooseWinner("P2"))
        }
    }

    async function play(gameType) {
        // get relevant list of resources to play
        let currentCount = 0
        let currentUrl = ""
        // set up variables depending on game
        if(gameType === "people") {
            currentCount = state.swapiLists.people  
            currentUrl = peopleURL
        }  
        else {
            currentCount = state.swapiLists.starships
            currentUrl = starshipsURL
        }
        if(! currentCount) return // if no list yet, return 
        else {
            // get 2 cards from the list and update them in state to show them 
            await setUpCardGame(1, currentUrl, currentCount) // return promise??
            await setUpCardGame(2, currentUrl, currentCount)
            battle(gameType)    
        }
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