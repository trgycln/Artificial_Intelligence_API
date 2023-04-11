import {createStore, applyMiddleware } from "redux"
import {combineReducers} from "redux"
import thunk from "redux-thunk"

import chatReducer from "./reducers/chatReducer"

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
	chatState:chatReducer
})

const store = createStore(rootReducer,  applyMiddleware(thunk))

export default store