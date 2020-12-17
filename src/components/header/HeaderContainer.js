import { connect } from "react-redux";
import { autsMeThunk } from "../../reducers/Header-reducers";
import { Header } from "./Header";

let mapStateToProps = (state) => {
    return {
        imgLogottip:state.HeaderReducers.imgLogottip,
        loginResultCode:state.HeaderReducers.loginResultCode,
    }
}

export const HeaderContainer = connect(mapStateToProps, {autsMeThunk,})(Header) 