import { useOktaAuth } from "@okta/okta-react";
import { Navigate } from "react-router-dom";
import { SpinnerLoading } from "../layouts/utils/SpinnerLoading";

const LoginWidget = ({config})=>{
    const {oktaAuth, authState} = useOktaAuth();
    const onSuccess = (tokens) =>{
        oktaAuth.handleLoginRedirect(tokens);
    };

    const onError = (err) => {
        console.log("Sign in error: ", err);
    }

    if(! authState){
        return(
        <SpinnerLoading />
    );

    }

    return authState.isAuthenticated ?
    <Navigate to="/" />
    :
    <div></div>
}

export default LoginWidget;