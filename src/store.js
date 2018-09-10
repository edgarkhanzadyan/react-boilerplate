import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import rootReducer from './reducers';

export const history = createBrowserHistory();
const initialState = {};
const store = createStore(
  connectRouter(history)(rootReducer), // new root reducer with router state
  initialState,
  applyMiddleware(routerMiddleware(history), thunk),
);
export default store;
