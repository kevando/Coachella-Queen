import { combineReducers } from 'redux'


import app from './app/reducer';


const reducers = {
  app,
};

const appReducer = combineReducers(reducers);

const rootReducer = (state, action) => {

  if (action.type === 'PURGE_DATA') {
    state = undefined;
  }
  // console.log('%c REDUX STATE:', 'color: blue',state);
  // console.log('%c REDUX ACTION:', 'color: blue',action);
  return appReducer(state, action)
}

export default rootReducer;
