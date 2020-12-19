import { connect } from "react-redux";
import { compose } from "redux";
import { MyProfileThunk, newMyPhotosThunk, } from "../../reducers/ProfileReducer";
import { RedirectLogin } from "../hoc/RedirectLogin";
import { ProfilePages } from "./ProfilePages";

let mapStateToProps = (state) => {
    return {
        loginResultCode:state.HeaderReducers.loginResultCode,
        myId:state.HeaderReducers.myId,
        myProfile:state.ProfileReducer.myProfile,
        NotAvatar:state.ProfileReducer.NotAvatar
    }
}

export const ProfilePagesContainer = compose( connect(mapStateToProps,
    {MyProfileThunk,newMyPhotosThunk}
    ), RedirectLogin)(ProfilePages) 