import { createStore, combineReducers, compose, applyMiddleware } from "redux" // applyMiddle, combine
import thunk from "redux-thunk"

// import reducers
import storeImports from "./store.imports"

const composeDevTool = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(combineReducers(storeImports.reducers), composeDevTool(applyMiddleware(thunk)))
export default store;