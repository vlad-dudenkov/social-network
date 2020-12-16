import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

let reducers= combineReducers({
    
})
export const store= createStore(reducers, applyMiddleware(thunk))