import DeviceInfo from 'react-native-device-info';
var Analytics = require('react-native-firebase-analytics');

import {
  ONBOARD_STEP_PASSED,
  SET_APP_CONFIG,
} from './actionTypes';


// -----------------------------------------------------------------------
// SET INITIAL APP SETTINGS

export function initializeAppData() {
  Analytics.setUserId(DeviceInfo.getUniqueID());
  Analytics.setUserProperty('deviceName', DeviceInfo.getDeviceName());
  Analytics.setUserProperty('deviceNamePreset', DeviceInfo.getDeviceName());
  return { type: SET_APP_CONFIG, DeviceInfo }
}

// -----------------------------------------------------------------------
// DELETE ALL APP DATA

export function purgeData() {
  return { type: 'PURGE_DATA' }
}

// -----------------------------------------------------------------------
// Set onboard show to false

export function onboardStepPassed(onboardStep) {
  return { type: ONBOARD_STEP_PASSED, onboardStep }
}















// const Permissions = require('react-native-permissions');

// export function checkNotificationPermission() {
//   // Thunk allows this async action
//   return function (dispatch) {
//     Permissions.getPermissionStatus('notification')
//       .then(response => {
//         dispatch({ type: SET_NOTIFICATION_PERMISSION, response })
//       });
//   };
// }
