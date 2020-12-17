import { connect } from "react-redux";
import { authLoginPostThunc } from "../../reducers/Header-reducers";
import { Login } from "./Login";

let mapStateToProps = (state) => {
    return {
        loginResultCode:state.HeaderReducers.loginResultCode,
    }
}

export const LoginContainer = connect(mapStateToProps,{authLoginPostThunc})(Login)