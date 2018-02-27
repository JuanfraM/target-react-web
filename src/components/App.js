import React from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'react-router-redux';
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';

import history from '.././utils/history';
import RouteFromPath from './routes/RouteFromPath';
import routes from '../routes';

const App = ({ authenticated, checked, user }) => (
  <div className="app-container">
    <ConnectedRouter history={history}>
      { checked && (!authenticated || !user.isEmpty()) &&
        <Switch>
          {routes.map((route, index) =>
            <RouteFromPath
              key={`route${index}`}
              {...route}
              authenticated={authenticated}
            />
          )}
        </Switch>
      }
    </ConnectedRouter>
  </div>
);

const { bool, object } = PropTypes;

App.propTypes = {
  authenticated: bool.isRequired,
  checked: bool.isRequired,
  user: object.isRequired
};

const mapState = state => ({
  checked: state.session.checked,
  authenticated: state.session.authenticated,
  user: state.session.user
});

export default connect(mapState)(App);
