import { connect } from "react-redux"
import { outputThunk } from "../../../reducers/Header-reducers"
import { Autarized } from "./Autarized"

let mapStateToProps = (state) => {
    return {
        myLogin:state.HeaderReducers.myLogin,
        myProfile:state.ProfileReducer.myProfile,
        NotAvatar:state.ProfileReducer.NotAvatar,
    }
}

export const AutarizedContainer = connect(mapStateToProps,{outputThunk})(Autarized)