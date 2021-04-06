import React from 'react';
import { AUTH0_DOMAIN, AUTH0_CLIENT_ID } from '../config/app';
import { Auth0Provider } from '@auth0/auth0-react';
import { useHistory } from 'react-router';

const AuthProvider: React.FC = ({ children }) => {
  const history = useHistory();

  const onRedirectCallback = (appState: any) => {
    history.push(appState?.returnTo ?? window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={AUTH0_DOMAIN}
      clientId={AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProvider;
