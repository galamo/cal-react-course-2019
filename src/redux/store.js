import { createStore } from "redux" // applyMiddle, combine

import { mainReducers } from "./reducers/mainReducers"
//reducer
const store = createStore(mainReducers)

export default store;
