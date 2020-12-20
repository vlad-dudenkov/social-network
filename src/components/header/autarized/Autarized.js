import React from "react"
import "./../../../style/Autarized.scss"


export const Autarized = (props) => {
    let output = () => {
         props.outputThunk()
    }
    return (
        <div className="autarized" >
            <div className="autarized__user-name">{props.myLogin}</div>
            <div className="autarized__img-container">
                {props.myProfile.map(m =>{ return (
                    <div>
                        <img 
                        className="autarized__img"
                        src={m.photos.large? m.photos.large : props.NotAvatar}
                        alt="img"
                        />
                    </div>
                )})}
                
            </div>
            <div className="autarized__output" onClick={output}>выход</div>   
        </div>
    )
}