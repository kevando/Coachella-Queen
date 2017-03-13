import {
  ONBOARDED,
} from './actionTypes';

const initialState = {
  onboarded: false,
};


export default function recs(app = initialState, action = {}) {

  switch (action.type) {

    // -------------------------------------------
    case ONBOARDED:
      return Object.assign({}, app, {
        onboarded: true
      })

    // -------------------------------------------
    default:
      return app;
  }
}
