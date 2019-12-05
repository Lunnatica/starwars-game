// Contains game functionality
import { getRandomNumber } from './getRandomNumber'

export function battle(list) { // decides winner depending on cards values
    // get 2 cards from the list  
    const randomNumber1 = getRandomNumber(list.length)
    const randomNumber2 = getRandomNumber(list.length)
    const card1 = list[randomNumber1]
    const card2 = list[randomNumber2]
    
    // decide what attribute to compare cards with (person - mass / starship - crew)
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
        return {card1, card2, winner:"draw"}
    }
    else if(parseFloat(attr1) > parseFloat(attr2)) {
        return {card1, card2, winner:"P1"}
    }
    else if(parseFloat(attr1) < parseFloat(attr2)) {
        return {card1, card2, winner:"P2"}
    }
}

