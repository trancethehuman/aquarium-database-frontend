import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { MenuButton } from '../MenuButton';

//Logout button is variation of Menu Button
//Uses hook from Auth0
export const LogoutButton = () => {
    const {logout} = useAuth0();
    
    return(
        <MenuButton label='Log Out' action={() => logout({ returnTo: window.location.origin })}/>
    )
}