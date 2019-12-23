import { createStore, combineReducers, compose } from "redux" // applyMiddle, combine


// import reducers
import storeImports from "./store.imports"

const composeDevTool = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(combineReducers(storeImports.reducers), composeDevTool())
export default store;