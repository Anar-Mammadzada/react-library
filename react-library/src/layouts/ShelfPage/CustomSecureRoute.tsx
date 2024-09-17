import { useOktaAuth } from "@okta/okta-react";
import React from "react";
import { Navigate } from "react-router-dom";
import { SpinnerLoading } from "../utils/SpinnerLoading";



interface CustomSecureRouteProps {
    element: React.ReactElement;
  }

  export const CustomSecureRoute: React.FC<CustomSecureRouteProps> = ({ element }) => {
    const { authState } = useOktaAuth();
  
    if (!authState) {
      return (
          <SpinnerLoading />
      );
    }
  
    if (!authState.isAuthenticated) {
      return <Navigate to="/login" replace/>
    }
  
    return element;
  };