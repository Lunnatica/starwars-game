import { createStore, applyMiddleware, combineReducers, compose } from "redux"
import thunk from "redux-thunk"
import cardsReducer, {setUpCard} from "./cards"
import playersReducer, { chooseWinner, incrementScore } from "./players"
import swapiListsCountReducer, { setUpListCount } from "./swapiListsCount"


const rootReducer = combineReducers({
    cards: cardsReducer,
    players: playersReducer,
    swapiLists: swapiListsCountReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // to be able to debug with devtools extension
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
    
store.subscribe(() => console.log(store.getState()))
export default store


//store.dispatch(chooseWinner("P1"))
// store.dispatch(incrementScore("P1"))
// store.dispatch(incrementScore("P1"))
// store.dispatch(incrementScore("P2"))
// store.dispatch(setUpPeopleList({hola:"holo"}))
// store.dispatch(setUpStarshipsList({hola:"starship"}))
// store.dispatch(setUpCard(2,{hola:"hola"}))