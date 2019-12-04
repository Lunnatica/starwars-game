import { createStore, combineReducers } from "redux"
import cardsReducer from "./cards"
import playersReducer from "./players"
import swapiListsReducer from "./swapiLists"


// import thunk from "redux-thunk"



const rootReducer = combineReducers({
    cards: cardsReducer,
    players: playersReducer,
    swapiLists: swapiListsReducer
})

// added dev extension to debug redux state 
const store = createStore(rootReducer, 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) 


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // to be able to debug with devtools extension
// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

    
store.subscribe(() => console.log(store.getState()))
export default store




