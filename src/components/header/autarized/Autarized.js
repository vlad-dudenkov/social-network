import React from "react"
import "./../../../style/Autarized.scss"


export const Autarized = (props) => {
    let output = () => {
         props.outputThunk()
    }

    return (
        <div className="autarized" >
            <div className="autarized__user-name">{props.myLogin}</div>
            <div className="autarized__img-container"></div>
            <div className="autarized__output" onClick={output}>выход</div>   
        </div>
    )
}