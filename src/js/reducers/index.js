import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import App from './App';
import history from '../utils/history';


const reducers = combineReducers({
  App,
  router: connectRouter(history),
});

export default createStore(
  reducers,
  {},
  compose(
    applyMiddleware(routerMiddleware(history)),
    applyMiddleware(thunk),
  ),
);
