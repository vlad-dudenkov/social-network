import React, { useState } from "react"
import { Redirect } from "react-router-dom"
import "./../../style/Login.scss"

export const Login = (props) => {
    let [email, setEmail] = useState("")
    let [passw, setPassw] = useState("")

    if (props.loginResultCode === 0) { return <Redirect to="/" /> };

    let ButtonClick = () => {
        let onClickk = { email: email, password: passw }
        props.authLoginPostThunc(onClickk)
    }
    return (
        <div className="login-container" >
            <div className="login-container__box">
                <label>Email:</label>
                <input
                    className="login-container__email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <label>Password:</label>
                <input
                    className="login-container__password"
                    type="password"
                    onChange={(e) => setPassw(e.target.value)}
                    value={passw}
                />
                <div className="login-container__button-container">
                    <button
                        className="login-container__button"
                        onClick={() => ButtonClick()}
                    >
                        Войти </button>
                </div>
            </div>

        </div>
    )
}