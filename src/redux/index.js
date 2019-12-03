import {createStore, applyMiddleware, combineReducers} from "redux"
import thunk from "redux-thunk"
import cardsReducer, {getPerson, getSpaceship} from "./cards"
import playersReducer, { chooseWinner, incrementScore } from "./players"
import swapiListsReducer from "./swapiLists"


const rootReducer = combineReducers({
    cards: cardsReducer,
    players: playersReducer,
    swapiLists: swapiListsReducer
})


const store = createStore(rootReducer, applyMiddleware(thunk))
store.subscribe(() => console.log(store.getState()))
export default store


//store.dispatch(chooseWinner("P1"))
// store.dispatch(incrementScore("P1"))
// store.dispatch(incrementScore("P1"))
// store.dispatch(incrementScore("P2"))
store.dispatch(getPerson("P1"))
store.dispatch(getPerson("P2"))