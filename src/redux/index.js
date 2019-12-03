import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import cardsReducer, {setUpCard} from "./cards"
import playersReducer, { chooseWinner, incrementScore } from "./players"
import swapiListsCountReducer, { setUpListCount } from "./swapiListsCount"


const rootReducer = combineReducers({
    cards: cardsReducer,
    players: playersReducer,
    swapiLists: swapiListsCountReducer
})


const store = createStore(rootReducer, applyMiddleware(thunk))
store.subscribe(() => console.log(store.getState()))
export default store


//store.dispatch(chooseWinner("P1"))
// store.dispatch(incrementScore("P1"))
// store.dispatch(incrementScore("P1"))
// store.dispatch(incrementScore("P2"))
// store.dispatch(setUpPeopleList({hola:"holo"}))
// store.dispatch(setUpStarshipsList({hola:"starship"}))
// store.dispatch(setUpCard(2,{hola:"hola"}))