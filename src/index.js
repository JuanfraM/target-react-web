/* eslint-disable import/default */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { sessionService } from 'redux-react-session';

import App from './components/App';
import configureStore from './store/configureStore';
import './styles/styles.scss';

require('./favicon.ico'); // Tell webpack to load favicon.ico

const store = configureStore();
sessionService.initSessionService(store);

const renderApp = (Component) => {
  render(
    <Provider store={store}>
      <div>
        <AppContainer>
          <Component />
        </AppContainer>,
      </div>
    </Provider>,
    document.getElementById('app')
  );
};

renderApp(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    renderApp(App);
  });
}
