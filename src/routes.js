// import App from './components/App';
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage'; // eslint-disable-line import/no-named-as-default
import SignUpPage from './containers/SignUpPage';
import { routesPaths } from './constants/routesPaths';

const routes = [
  {
    path: routesPaths.index,
    component: HomePage,
    exact: true,
    index: true,
    private: true
  },
  {
    path: routesPaths.login,
    component: LoginPage
  },
  {
    path: routesPaths.signUp,
    component: SignUpPage
  }
];

export default routes;
