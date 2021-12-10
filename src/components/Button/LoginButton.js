import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { MenuButton } from "./MenuButton";

const LoginButton = () => {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

    if (isAuthenticated) {
        return <MenuButton label='Logout' action={() => logout({ returnTo: window.location.origin })}/>
    } else {
        return <MenuButton label='Login' action={() => loginWithRedirect()}/>
    }   
}
    
export default LoginButton;