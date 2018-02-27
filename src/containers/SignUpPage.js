import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, Redirect } from 'react-router-dom';
import * as signUpActions from '../actions/signUpActions';
import SignUpForm from '../components/user/SignUpForm';
import { routesPaths } from '../constants/routesPaths';
import Loading from '../components/common/Loading';

const SignUpPage = ({ actions: { signUp }, authenticated, loading, history: { location: { state } } }) => {
  if (authenticated) {
    return <Redirect to={state ? state.nextPathname : routesPaths.index} />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <p>SIGN UP</p>
      <SignUpForm onSubmit={signUp} />
      <Link to={routesPaths.login}> Sign in </Link>
    </div>
  );
};

const { bool, object } = PropTypes;

SignUpPage.propTypes = {
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
  actions: bindActionCreators(signUpActions, dispatch)
});

export default connect(mapStateToProps, mapDispatch)(SignUpPage);
