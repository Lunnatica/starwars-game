const initialStatePlayers = {
    winner: "",
    scoreP1: 0,
    scoreP2: 0
}
export function chooseWinner(player) {
    return {
        type: "CHOOSE_WINNER",
        payload: player
    }
}

export function incrementScore(player) {
    return {
        type: "INCREMENT_SCORE",
        payload: player
    }
}

export default function cardsReducer(state = initialStatePlayers, action) {
    switch(action.type) {
        case "CHOOSE_WINNER":
            return {...state,winner:action.payload}
        case "INCREMENT_SCORE":
            if(action.payload === "P1") return {...state,scoreP1: state.scoreP1 + 1}
            else return {...state,scoreP2: state.scoreP2 + 1}
        default:
            return state
    }
}