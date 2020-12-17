import { connect } from "react-redux"
import { outputThunk } from "../../../reducers/Header-reducers"
import { Autarized } from "./Autarized"

let mapStateToProps = (state) => {
    return {
        state
    }
}

export const AutarizedContainer = connect(mapStateToProps,{outputThunk})(Autarized)