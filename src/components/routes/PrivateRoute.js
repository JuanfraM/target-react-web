import React from 'react';
import { object, bool, string, func, array } from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import RoleAuthorization from '.././common/RoleAuthorization';
import { routesPaths } from '../../constants/routesPaths';

const PrivateRoute = ({
  component,
  redirectPath,
  path,
  authenticated,
  roles,
  withoutRole = false,
  exact = false
}) => (
  <Route
    exact={exact}
    path={path}
    render={props => (
      authenticated ?
        <RoleAuthorization forcePermission={withoutRole} roles={roles}>
          {React.createElement(component, props)}
        </RoleAuthorization> :
        <Redirect
          to={{
            pathname: redirectPath || routesPaths.login,
            state: {
              from: props.location,
              nextPathname: props.location
            }
          }}
        />
    )}
  />
);

PrivateRoute.propTypes = {
  component: func.isRequired,
  path: string.isRequired,
  authenticated: bool.isRequired,
  exact: bool,
  location: object,
  roles: array,
  withoutRole: bool,
  redirectPath: string
};

export default PrivateRoute;
