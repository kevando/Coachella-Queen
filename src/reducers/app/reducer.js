import _ from 'lodash';

import {
  ONBOARD_STEP_PASSED,
} from './actionTypes';



const initialState = {
  // onboarded: false,
  onboarding: {
    hello : { show: true,  },
    welcome : { show: true, title: 'Welcome to Coachella Queen', message: 'Select the bands you and your friends want to see at Coachella'}
  }
};


export default function recs(app = initialState, action = {}) {

  switch (action.type) {

    // -------------------------------------------
    case ONBOARD_STEP_PASSED:
      // console.log('onboardStep',action.onboardStep)
      // console.log('onboardStep object',app.onboarding['hello'])
      // console.log('app',app)
      // @todo refactor this
      var onboardStep = app.onboarding[action.onboardStep];
      onboardStep.show = false;

      var newOnboarding = Object.assign({},app.onboarding)
      newOnboarding[action.onboardStep].show = false;

      var newApp = {
        ...app,
        onboarding: newOnboarding
      }

      // console.log('NEW app',newApp)
      return newApp;
      // return Object.assign({}, app, {
      //   onboarded: true
      // })

    // -------------------------------------------
    default:
      return app;
  }
}
