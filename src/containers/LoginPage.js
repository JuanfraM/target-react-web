import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, Redirect } from 'react-router-dom';
import * as sessionActions from '../actions/sessionActions';
import LoginForm from '../components/session/LoginForm'; // eslint-disable-line import/no-named-as-default
import Loading from '../components/common/Loading';
import { routesPaths } from '../constants/routesPaths';

const LoginPage = ({ actions: { login }, authenticated, loading, history: { location: { state } } }) => {
  if (authenticated) {
    return <Redirect to={state ? state.nextPathname : routesPaths.index} />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <p>LOGIN</p>
      <LoginForm onSubmit={login} />
      <Link to={routesPaths.signUp}> Sign up </Link>
    </div>
  );
};

const { bool, object } = PropTypes;

LoginPage.propTypes = {
  actions: object.isRequired,
  authenticated: bool.isRequired,
  loading: bool.isRequired,
  history: object.isRequired
};

const mapStateToProps = ({ session: { authenticated }, auth: { loading } }) => ({
  authenticated,
  loading,
});

const mapDispatch = dispatch => ({
  actions: bindActionCreators(sessionActions, dispatch)
});

export default connect(mapStateToProps, mapDispatch)(LoginPage);
