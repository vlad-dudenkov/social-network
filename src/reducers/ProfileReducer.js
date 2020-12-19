import thunk from "redux-thunk"
import { ApiSocialNetwork } from "../Api"
import imgAvatar from "./../img/159236-9e9e9e.png"
const MYPROF = "MYPROF"

let initialState = {
    myProfile:[],
    NotAvatar:imgAvatar,
}

export const ProfileReducers = (state=initialState, action) => {debugger
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

export const newMyPhotosThunk = (file) => async(dispatch) => {
    let res = await ApiSocialNetwork.newProfilePhotos(file)
console.log(res)
}