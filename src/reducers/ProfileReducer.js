import thunk from "redux-thunk"
import { ApiSocialNetwork } from "../Api"
const MYPROF = "MYPROF"

let initialState = {
    myProfile:[],
}

export const ProfileReducers = (state=initialState, action) => {
    switch(action.type){
        case MYPROF: return {...state, myProfile:[action.myDate]}
        default:return state
    }
}

let myProfiles = (myDate) => ({type:MYPROF,myDate})

export const MyProfileThunk = (myId) => async(dispatch) => {
    let res = await ApiSocialNetwork.myProfile(myId)
    dispatch(myProfiles(res.data))
}