import { useEffect } from "react"

export const Autarized = (props) => {

    let Output = () => {
         props.outputThunk()
    }

    return (
        <div className="autarized">
            автаризован
            <button onClick={Output} >выход</button>
        </div>
    )
}