import { connect } from "react-redux";
import { compose } from "redux";
import { RedirectLogin } from "../hoc/RedirectLogin";
import { ProfilePages } from "./ProfilePages";

let mapStateToProps = (state) => {
    return {
        loginResultCode:state.HeaderReducers.loginResultCode,
    }
}

export const ProfilePagesContainer = compose( connect(mapStateToProps), RedirectLogin)(ProfilePages) 