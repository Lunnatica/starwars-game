const initialState = {
    card1: {},
    card2: {}
}

const peopleURL = "https://swapi.co/api/people/" // /people/:id/ for specific resource //http https://swapi.co/api/people/1/
const spaceshipsURL = "https://swapi.co/api/starships/" 

function getResource(url) {
    const number = 1
    return fetch(`${url}${number}`)  
    .then(res => res.json())
}

export function getPerson(player) {
    return (dispatch, getState) => {
        getResource(peopleURL)
            .then(res => {
                dispatch({
                    type: "GET_PERSON",
                    payload: {player,res}
                })
            })
            .catch(err => alert(err)) // TODO - retry if not found
    }
}

export function getSpaceship(player) {
    return (dispatch, getState) => {
        getResource(spaceshipsURL)
            .then(res => {
                dispatch({
                    type: "GET_SPACESHIP",
                    payload: {player,res}
                })
            })
            .catch(err => alert(err)) // TODO - retry if not found
    }
}

export default function cardsReducer(state = initialState, action) {
    switch(action.type) {
        case "GET_PERSON":
            if(action.payload.player === "P1") return {...state, card1: action.payload.res}
            else return {...state, card2: action.payload.res}
        case "GET_SPACESHIP":
            if(action.payload.player === "P1") return {...state, card1: action.payload.res}
            else return {...state, card2: action.payload.res}
        default:
            return state
    }
}