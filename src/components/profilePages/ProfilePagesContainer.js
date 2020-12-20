import { connect } from "react-redux";
import { compose } from "redux";
import { MyProfileThunk, newMyPhotosThunk, getStatusThunk,putStatusThunk } from "../../reducers/ProfileReducer";
import { RedirectLogin } from "../hoc/RedirectLogin";
import { ProfilePages } from "./ProfilePages";

let mapStateToProps = (state) => {
    return {
        loginResultCode:state.HeaderReducers.loginResultCode,
        myId:state.HeaderReducers.myId,
        myProfile:state.ProfileReducer.myProfile,
        NotAvatar:state.ProfileReducer.NotAvatar,
        myStatus:state.ProfileReducer.myStatus,
        myResult:state.ProfileReducer.myResult,
    }
}

export const ProfilePagesContainer = compose( connect(mapStateToProps,
    {MyProfileThunk,newMyPhotosThunk, getStatusThunk,putStatusThunk}
    ), RedirectLogin)(ProfilePages) 