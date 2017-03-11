// import _ from 'lodash';

import {
  ONBOARDED,
} from './actionTypes';

const initialState = {
  // version: DeviceInfo.getReadableVersion(),
  // deviceName: DeviceInfo.getDeviceName(),
  onboarded: false,
  kevin: 'kevoo'
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
