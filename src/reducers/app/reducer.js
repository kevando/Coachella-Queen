import _ from 'lodash';

import {
  ONBOARD_STEP_PASSED,
  SET_APP_CONFIG,
  SET_WEEKEND,
  INIT_APP,
} from './actionTypes';


const initialState = {
  initialized: false,
  version: 'Not Set',
  deviceId: 'Not Set',
  deviceName: 'Not Set',
  weekend: null,
  onboarding: {
    wiggle : { show: true },
    hello : { show: true,  },
    welcome : { show: true, title: 'Welcome to Coachella Queen', message: 'Select the bands you and your friends want to see at Coachella'}
  }
};


export default function app(app = initialState, action = {}) {

  switch (action.type) {

    // --------------------------------------------------------------------
    // Called each time an onboard step gets passed through

    case ONBOARD_STEP_PASSED:

      // @todo refactor this
      var onboardStep = app.onboarding[action.onboardStep];

      // if onboard step is not found, just return
      if(!onboardStep) { alert('onboad step not found'); return app; }

      onboardStep.show = false;

      var newOnboarding = Object.assign({},app.onboarding)
      newOnboarding[action.onboardStep].show = false;

      return {
        ...app,
        onboarding: newOnboarding
      }

    // --------------------------------------------------------------------
    // Called when the app first loads

    case SET_APP_CONFIG:
      return {
        ...app,
        version: action.DeviceInfo.getReadableVersion(),
        deviceId: action.DeviceInfo.getUniqueID(),
        deviceName: action.DeviceInfo.getDeviceName(),
      }

    // --------------------------------------------------------------------
    // Called when the app finishes loading firebase data

    case INIT_APP:
      return {
        ...app,
        initialized: true,
      }

    // --------------------------------------------------------------------
    // User action in hello.js

    case SET_WEEKEND:
      return {
        ...app,
        weekend: action.weekend
      }

    // --------------------------------------------------------------------
    default:
      return app;
  }
}
