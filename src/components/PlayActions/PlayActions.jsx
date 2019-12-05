import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Button from "../Button/Button"
import { peopleURL, starshipsURL } from "../../constants"
import { setUpCards } from "../../redux/cards"
import { chooseWinner } from "../../redux/players"
import { setUpList } from '../../redux/swapiLists'
import { battle } from '../../logic/gameLogic'
import { ReactComponent as LoadingGif } from '../../assets/LoadingGif.svg'

function PlayActions() {

    const dispatch = useDispatch()
    const {people, starships} = useSelector(state => state.swapiLists)
    const [isDisabled, setIsDisabled] = useState(true) // controls buttons enablement
    const [errorInFetch, setErrorInFetch] = useState(false) // depends on fetch responses
    
    useEffect(() => { 
        // retrieve list of people and list of starships on first mount
        function fetchData(url, resourceType, listOfData = []) {
          return fetch(url)
          .then(res => res.json())
          .then(res => {
            listOfData.push(...res.results) 
            if(res.next) return fetchData(res.next, resourceType, listOfData)   // gets data from next page
            else dispatch(setUpList(resourceType, listOfData)) // updates state once we have all data
          })
        }
          // prevent the user from playing before all the data is loaded
          Promise.all([fetchData(peopleURL, "people"), fetchData(starshipsURL, "starships")])
          .then(() => setIsDisabled(false))
          .catch((error) => setErrorInFetch(true)) // if any of them fail, display error
      }, [])
    
       function play(list) {
        // get cards and decide winner
        const {card1, card2, winner} = battle(list)
        // update state 
        dispatch(setUpCards(card1, card2))
        dispatch(chooseWinner(winner))
    }
    
    const GameDescription = () => isDisabled ? 
                                <div className="GameDescription">
                                    <p>Loading data...</p><LoadingGif/>
                                </div> :
                                <div className="GameDescription"> Choose a resource to fight...</div>

    const DisplayError = () => <div className="alert alert-danger">
            <p>Error when getting the data, please refresh the page.</p>
         </div>

    return (
        <div className="PlayActions">
           { errorInFetch ? < DisplayError /> : <GameDescription />}
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