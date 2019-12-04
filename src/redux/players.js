const initialStatePlayers = {
    winner: "",
    scoreP1: 0,
    scoreP2: 0
}

// action creator
export function chooseWinner(player) {
    return {
        type: "CHOOSE_WINNER",
        payload: player
    }
}

// reducer
export default function playersReducer(state = initialStatePlayers, action) {
    switch(action.type) {
        case "CHOOSE_WINNER":
            if(action.payload === "draw") return { // if draw, do not change scores
                ...state,
                winner:action.payload,
            }
            else return {
                ...state,
                winner:action.payload, // set up winner
                ["score" + action.payload]: state["score" + action.payload] + 1 // increment counter of winner 
            }
        default:
            return state
    }
}