import _ from 'lodash';

import {
  ONBOARD_STEP_PASSED,
} from './actionTypes';


const initialState = {
  initialized: false,
  version: 'Not Set',
  deviceId: 'Not Set',
  deviceName: 'Not Set',
  onboarding: {
    hello : { show: true,  },
    welcome : { show: true, title: 'Welcome to Coachella Queen', message: 'Select the bands you and your friends want to see at Coachella'}
  }
};


export default function recs(app = initialState, action = {}) {

  switch (action.type) {

    // --------------------------------------------------------------------
    // Called each time an onboard step gets passed through

    case ONBOARD_STEP_PASSED:

      // @todo refactor this
      var onboardStep = app.onboarding[action.onboardStep];
      onboardStep.show = false;

      var newOnboarding = Object.assign({},app.onboarding)
      newOnboarding[action.onboardStep].show = false;

      return {
        ...app,
        onboarding: newOnboarding
      }

    // --------------------------------------------------------------------
    // Called when the app first loads

    case 'APP_INIT':
      return {
        ...app,
        initialized: true,
      }

    // --------------------------------------------------------------------
    default:
      return app;
  }
}
