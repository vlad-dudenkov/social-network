import React from "react"
import { Redirect } from "react-router-dom"


export const RedirectLogin= (Component) => {
    let redir = (props) => {
        if(props.loginResultCode===1){return <Redirect to="/Login"/>}
        return <Component {...props}/>
    }
    return redir
}