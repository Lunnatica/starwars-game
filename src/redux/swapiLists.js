const initialState = {
    people: {},
    starships: {}
}
export function setUpList(resource,data) {
    return {
        type: "SET_UP_LIST",
        payload: {resource,data}
    }
}

export default function swapiListsReducer(state = initialState, action) {
    switch(action.type) {
        case "SET_UP_LIST":
            if(action.payload.resource === "people") return {...state, people: action.payload.data}
            else return {...state, starships: action.payload.data}
        case "SET_UP_STARSHIPS_LIST":
            return {...state, starships: action.payload}
        default:
            return state
    }
}