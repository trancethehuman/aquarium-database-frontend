import React from "react";
import { LoginButton } from "./LoginButton";
import { LogoutButton } from "./LogoutButton";

import { useAuth0 } from "@auth0/auth0-react";

//Displays either Log In or Log Out button, depending on whether
//the user is logged in or not (isAuthenticated tells us this)
export const AuthenticationButton = () => {
    const {isAuthenticated} = useAuth0();

    return isAuthenticated ? <LogoutButton /> : <LoginButton />
};