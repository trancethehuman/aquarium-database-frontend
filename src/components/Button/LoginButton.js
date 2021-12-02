import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './LoginButton.css';

const LoginButton = () => {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

    if (isAuthenticated) {
        return <button className='LoginButton' onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
    } else {
        return <button className='LoginButton' onClick={() => loginWithRedirect()}>Log In</button>
    }   
}
    
export default LoginButton;