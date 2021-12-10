import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { MenuButton } from '../MenuButton';

//Login button is variation of Menu Button
//Uses hook from Auth0
export const LoginButton = () => {
    const {loginWithRedirect} = useAuth0();
    
    return(
        <MenuButton label='Log In' action={() => loginWithRedirect()}/>
    )
}