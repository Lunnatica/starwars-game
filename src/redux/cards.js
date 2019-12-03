const initialState = {
    card1: {},
    card2: {}
}

// export function setUpCard(cardNumber, idResource, url) {
    
//     return (dispatch, getState) => {
//         fetch(`${url}${idResource}`)
//             .then(res => res.json())
//             .then(resource => {
//                 dispatch({
//                     type: "SET_UP_CARD",
//                     payload: {cardNumber, resource}
//                 })
//             })
//     }
// }

export function setUpCard(cardNumber, resource) {
    return({
        type: "SET_UP_CARD",
        payload: {cardNumber, resource}
    })
}




// export function setUpCard(cardNumber, idResource, url) {
//     return new Promise( (resolve, reject) => {
//         fetch(`${url}${idResource}`)
//         .then(res => res.json())
//         .then(resource => {
//                 dispatch({
//                     type: "SET_UP_CARD",
//                     payload: {cardNumber, resource}
//                 })
//                 return resource
//             })
//     }
// }



export default function cardsReducer(state = initialState, action) {
    switch(action.type) {
        case "SET_UP_CARD":
            if(action.payload.cardNumber === 1) return {...state, card1: action.payload.resource}
            else return {...state, card2: action.payload.resource}
        default:
            return state
    }
}