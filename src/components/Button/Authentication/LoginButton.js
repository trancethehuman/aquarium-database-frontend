import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { MenuButton } from '../MenuButton';

export const LoginButton = () => {
    const {loginWithRedirect} = useAuth0();
    
    return(
        <MenuButton label='Log In' action={() => loginWithRedirect()}/>
    )
}