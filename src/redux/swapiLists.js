const initialState = {
    people: [],
    starships: []
}

// action creator
export function setUpList(resourceType,data) {
    return {
        type: "SET_UP_LIST",
        resourceType: resourceType,
        data: data
    }
}

// reducer
export default function swapiListsReducer(state = initialState, action) {
    switch(action.type) {
        case "SET_UP_LIST":
                return {...state, [action.resourceType]: [...state[action.resourceType], ...action.data] }
        default:
            return state
    }
}