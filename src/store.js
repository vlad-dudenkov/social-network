import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { HeaderReducers } from "./reducers/Header-reducers";
import { ProfileReducers } from "./reducers/ProfileReducer";

let reducers= combineReducers({
    HeaderReducers:HeaderReducers,
    ProfileReducer:ProfileReducers,
})
export const store= createStore(reducers, applyMiddleware(thunk))