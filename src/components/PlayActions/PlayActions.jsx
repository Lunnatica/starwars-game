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
        let provisionalList = [] // to avoid re-rendering multiple times
      function fetchData(url, resourceType) {
        return fetch(url)
        .then(res => res.json())
        .then(res => {
            provisionalList = provisionalList.concat(res.results)
            if(res.next) return fetchData(res.next, resourceType) 
            else dispatch(setUpList(resourceType, res.results)) // once all data is loaded, update state
        })
      }
      // prevent the user from playing before all the data is loaded
        Promise.all([fetchData(peopleURL, "people"), fetchData(starshipsURL, "starships")])
        .then(() => setIsDisabled(false))
    }, [])

    function battle() {
        console.log("BATTLE with ", card1.name,card2.name)
        // select winner (update on state), show winner on card and update counter
        let attr1, attr2
        if(Object.keys(card1).includes("mass")) {
            attr1 = card1.mass
            attr2 = card2.mass
        } else {
            attr1 = card1.crew
            attr2 = card2.crew
        }
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
            const randomNumber1 = Math.floor(Math.random() * (list.length - 1))
            const randomNumber2 = Math.floor(Math.random() * (list.length - 1))

            // update cards in state 
            dispatch(setUpCards(list[randomNumber1], list[randomNumber2]))

            // decide who is the winner
            battle()    
        
    }
    const GameDescription = () => isDisabled ? 
                                <div className="gameDescription">Loading data...</div> :
                                <div className="gameDescription"> Choose a resource to fight...</div>

    return (
        <div className="PlayActions">
           <GameDescription />
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
    )
}

export default PlayActions