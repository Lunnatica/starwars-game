import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Button from "../Button/Button"
import { peopleURL, starshipsURL } from "../../constants"
import { setUpCards } from "../../redux/cards"
import { chooseWinner } from "../../redux/players"
import { setUpList } from '../../redux/swapiLists'


function PlayActions() {

    const dispatch = useDispatch()
    const {people, starships} = useSelector(state => state.swapiLists)
    const {card1, card2} = useSelector(state => state.cards)
    const [isDisabled, setIsDisabled] = useState(true);
    
    useEffect(() => { // retrieve list of people and list of starships
        function fetchData(url, resourceType) {
          return fetch(url)
          .then(res => res.json())
          .then(res => {
            dispatch(setUpList(resourceType, res.results))
            if(res.next) return fetchData(res.next, resourceType) 
          })
        }
    
          // prevent the user from playing before all the data is loaded
          Promise.all([fetchData(peopleURL, "people"), fetchData(starshipsURL, "starships")])
          .then(() => setIsDisabled(false))
      }, [])
    

    function battle() { // decides winner depending on cards values
        console.log("BATTLE with ", card1.name,card2.name)

        let attr1, attr2
        if(Object.keys(card1).includes("mass")) {
            attr1 = card1.mass
            attr2 = card2.mass
        } else {
            attr1 = card1.crew
            attr2 = card2.crew
        }
        // chooses winner and updates scores
        if(attr1 ==="unknown" || attr2 ==="unknown" || attr1 === attr2) {
            dispatch(chooseWinner("draw"))
        }
        else if(parseFloat(attr1) > parseFloat(attr2)) {
            dispatch(chooseWinner("P1"))
        }
        else if(parseFloat(attr1) < parseFloat(attr2)) {
            dispatch(chooseWinner("P2"))
        }
    }

    function play(list) {
            // get 2 cards from the list  
            const randomNumber1 = Math.floor(Math.random() * list.length)
            const randomNumber2 = Math.floor(Math.random() * list.length)

            // update cards in state 
            dispatch(setUpCards(list[randomNumber1], list[randomNumber2]))

            // decide who is the winner
            battle()    
        
    }
    const GameDescription = () => isDisabled ? 
                                <div className="GameDescription">Loading data...</div> :
                                <div className="GameDescription"> Choose a resource to fight...</div>

    return (
        <div className="PlayActions">
           <GameDescription />
           <div className="ButtonsArea">
                <Button id="playWithPeopleButton" 
                    className ="playButton" 
                    callback={() =>  play(people) } 
                    text="Start battle! (People)"
                    isDisabled={isDisabled}
                />
                <Button id="playWithStarshipsButton" 
                    className="playButton" 
                    callback={() => play(starships)} 
                    text="Start battle! (Starships)"
                    isDisabled={isDisabled}
                />
           </div> 
        </div>
    )
}

export default PlayActions