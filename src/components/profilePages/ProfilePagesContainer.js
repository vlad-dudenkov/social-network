import { connect } from "react-redux";
import { compose } from "redux";
import { MyProfileThunk } from "../../reducers/ProfileReducer";
import { RedirectLogin } from "../hoc/RedirectLogin";
import { ProfilePages } from "./ProfilePages";

let mapStateToProps = (state) => {
    return {
        loginResultCode:state.HeaderReducers.loginResultCode,
        myId:state.HeaderReducers.myId,
        myProfile:state.ProfileReducer.myProfile,
    }
}

export const ProfilePagesContainer = compose( connect(mapStateToProps,{MyProfileThunk}), RedirectLogin)(ProfilePages) 