const initialState = {
    people: {},
    startships: {}
}
export function setUpPeopleList(data) {
    return {
        type: "SET_UP_PEOPLE_LIST",
        payload: data
    }
}

export function setUpStarshipsList(data) {
    return {
        type: "SET_UP_STARSHIPS_LIST",
        payload: data
    }
}

export default function swapiListsReducer(state = initialState, action) {
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