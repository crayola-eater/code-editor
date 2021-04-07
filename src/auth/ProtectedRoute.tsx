import { withAuthenticationRequired } from '@auth0/auth0-react';
import React, { ComponentType } from 'react';
import { Route, RouteProps } from 'react-router';
import Loading from '../components/common/Loading/Loading';

const ProtectedRoute: React.FC<RouteProps> = ({ children, ...args }) => {
  return (
    <Route
      component={withAuthenticationRequired(children as ComponentType, {
        onRedirecting: () => <Loading />,
      })}
      {...args}
    />
  );
};

export default ProtectedRoute;
