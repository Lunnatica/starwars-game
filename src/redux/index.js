import { createStore, combineReducers } from "redux"
import cardsReducer from "./cards"
import playersReducer from "./players"
import swapiListsReducer from "./swapiLists"

const rootReducer = combineReducers({
    cards: cardsReducer,
    players: playersReducer,
    swapiLists: swapiListsReducer
})

// added dev extension to debug redux state 
const store = createStore(rootReducer, 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) 

export default store




