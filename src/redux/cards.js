const initialState = {
    card1: {},
    card2: {}
}

export function setUpCard(cardNumber, resource) {
    return({
        type: "SET_UP_CARD",
        payload: {cardNumber, resource}
    })
}


export default function cardsReducer(state = initialState, action) {
    switch(action.type) {
        case "SET_UP_CARD":
            return {...state, ["card" + action.payload.cardNumber]: action.payload.resource}
        default:
            return state
    }
}