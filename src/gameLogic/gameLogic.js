// Contains game functionalities


export function battle(list) { // decides winner depending on cards values

    // get 2 cards from the list  
    const randomNumber1 = Math.floor(Math.random() * list.length)
    const randomNumber2 = Math.floor(Math.random() * list.length)

    const card1 = list[randomNumber1]
    const card2 = list[randomNumber2]

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
        return {card1:card1, card2:card2, winner:"draw"}
    }
    else if(parseFloat(attr1) > parseFloat(attr2)) {
        return {card1, card2, winner:"P1"}
    }
    else if(parseFloat(attr1) < parseFloat(attr2)) {
        return {card1, card2, winner:"P2"}
    }
}

