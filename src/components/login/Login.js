import React, { useState } from "react"
import { Redirect } from "react-router-dom"

export const Login = (props) => {
    let [email, setEmail] = useState("")
    let [passw, setPassw] = useState("")

    if (props.loginResultCode === 0) { return <Redirect to="/" /> };

    let ButtonClick = () => {
        onClickk = { email:email, password:passw}
        props.authLoginPostThunc(onClickk)
    }
    return (
        <div className="login-container" >
            <input
                className="login-container__email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <input
                className="login-container__password"
                type="password"
                onChange={(e) => setPassw(e.target.value)}
                value={passw}
            />
            <button onClick={()=> ButtonClick()}>войти </button>
        </div>
    )
}