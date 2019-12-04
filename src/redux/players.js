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

export default function cardsReducer(state = initialStatePlayers, action) {
    switch(action.type) {
        case "CHOOSE_WINNER":
            return {
                ...state,
                winner:action.payload, // set up winner
                ["score" + action.payload]: state[action.payload] + 1 // increment counter of winner plus 1
            }
        default:
            return state
    }
}