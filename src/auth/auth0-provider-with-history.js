//NOT BEING USED. DIDN'T WORK LMAO

import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Auth0Provider} from '@auth0/auth0-react';

export const Auth0ProviderWithHistory = ({ children }) => {
    const domain = process.env.REACT_APP_AUTH0_DOMAIN;
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
    
    const navigate = useNavigate();
    
    const onRedirectCallback = (appState) => {
        navigate(appState?.returnTo || window.location.pathname);
    };

    return (
        <Auth0Provider
            domain={domain}
            client={clientId}
            redirectId={window.location.origin}
            // onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    );
};
