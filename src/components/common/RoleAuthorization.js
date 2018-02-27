import React from 'react';
import { connect } from 'react-redux';
import { oneOfType, array, object, string, bool } from 'prop-types';

import { userRoles } from '../../constants/roles';

const allRoles = Object.keys(userRoles).map(key => userRoles[key]);

const RoleAuthorization = ({ children, userRole, roles = allRoles, forcePermission = false }) => {
  const authorizedRole = roles.indexOf(userRole) >= 0;

  if (!authorizedRole && !forcePermission) {
    return null;
  }

  if (Array.isArray(children)) {
    return (
      <div>{children}</div>
    );
  }

  return children;
};

RoleAuthorization.propTypes = {
  children: oneOfType([array, object]).isRequired,
  userRole: string,
  roles: array,
  forcePermission: bool
};

const mapState = state => ({
  userRole: state.session.user.currentTeam.role
});

export default connect(mapState)(RoleAuthorization);
