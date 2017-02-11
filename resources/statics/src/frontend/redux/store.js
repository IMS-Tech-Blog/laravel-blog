/**
 * redux store
 */
import {
  compose,
  createStore,
  applyMiddleware
}                  from 'redux';
import thunk       from 'redux-thunk';
import rootReducer from './reducers/index.js';

const buildStore = compose(applyMiddleware(thunk), createStore);
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default function configureStore(initialState) {
  return buildStore(rootReducer, initialState);
}

export function configStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
