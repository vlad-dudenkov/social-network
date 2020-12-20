import { ApiSocialNetwork } from "../Api"
import imgAvatar from "./../img/159236-9e9e9e.png"
const MYPROF = "MYPROF"
const GETSTATUS = "GETSTATUS"
const MYRESULTCODE = "MYRESULTCODE"

let initialState = {
    myProfile: [],
    NotAvatar: imgAvatar,
    myStatus: "",
    myResult: false,
}

export const ProfileReducers = (state = initialState, action) => {
    
    switch (action.type) {
        case MYPROF: return { ...state, myProfile: [action.myDate] }
        case GETSTATUS: return { ...state, myStatus: action.status }
        case MYRESULTCODE: return { ...state, myResult: action.result }
        default: return state
    }
}

let myProfiles = (myDate) => ({ type: MYPROF, myDate })
let getStatus = (status) => ({ type: GETSTATUS, status })
let myProfileResultCode = (result) => ({ type: MYRESULTCODE, result })

export const MyProfileThunk = (myId) => async (dispatch) => {
    let res = await ApiSocialNetwork.myProfile(myId)
    dispatch(myProfiles(res.data))
}

export const newMyPhotosThunk = (file) => async (dispatch) => {
    let res = await ApiSocialNetwork.newProfilePhotos(file)
    dispatch(myProfileResultCode(initialState.myResult?false:true))
}

export const getStatusThunk = (myId) => async (dispatch) => {
    let res = await ApiSocialNetwork.getStatus(myId)
    dispatch(getStatus(res.data))
}
export const putStatusThunk = (valueInputStatus) => async (dispatch) => {
    let res = await ApiSocialNetwork.putMyStatus(valueInputStatus)
    dispatch(myProfileResultCode(initialState.myResult?false:true))
}