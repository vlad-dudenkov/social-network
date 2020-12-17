import { ApiSocialNetwork } from "../Api"
import imgLogotip from "./../img/browser_logo.png"
const MYID = "MYID"
const LOGIN_RESULT_CODE = "LOGIN_RESULT_CODE"
const MYLOG = "MYLOG"


let InitialState = {
    imgLogottip: imgLogotip,
    myId:"",
    loginResultCode:"",
    myLogin:"",
    
}
export const HeaderReducers = (state = InitialState, action) => {
    switch (action.type) {
        case MYID : return {...state, myId:action.id}
        case LOGIN_RESULT_CODE: return {...state, loginResultCode:action.res}
        case MYLOG: return {...state, myLogin:action.myLog}

        default: return state
    }
}
let myId = (id) => ({type:MYID, id})
let loginResultCode = (res) => ({type:LOGIN_RESULT_CODE, res})
let myLogin = (myLog) => ({type:MYLOG, myLog})

export const autsMeThunk = () => async (dispatsh) => {
    let response = await ApiSocialNetwork.autsMe()
    dispatsh(myId(response.data.data.id))
    dispatsh(loginResultCode(response.data.resultCode))
    dispatsh(myLogin(response.data.data.login))
}

export const outputThunk = () => async (dispatsh) => {
    let response = await ApiSocialNetwork.authLogin()
    dispatsh(loginResultCode(1))
}

export const authLoginPostThunc = (onClickk) => async(dispatsh) => {
    let res = await ApiSocialNetwork.authLoginPost(onClickk)
    dispatsh( loginResultCode(res.data.resultCode))
    console.log(res.data.resultCode)
}