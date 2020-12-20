import React, { useEffect } from "react"
import "./../../style/header.scss"
import { AutarizedContainer } from "./autarized/AutarizedContainer"
import { NotAutarized } from "./notAutarized/NotAutarized"

export const Header = (props) => {
    useEffect( ()=> props.autsMeThunk() )
    return (
        <div className="header-container">
            <div className="header-container__logo-container">
                <div className="header-container__logo-img">
                    <img src={props.imgLogottip} alt="img"/>
                </div>
                <div className="header-container__logo-text">
                    social network
                </div>

            </div>
            <div className="header-container__login-container">
                {props.loginResultCode===0?<AutarizedContainer />:<NotAutarized/>}
            </div>
        </div>
    )
}