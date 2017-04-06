import DeviceInfo from 'react-native-device-info';
var Analytics = require('react-native-firebase-analytics');
var Mixpanel = require('react-native-mixpanel');

import {
  ONBOARD_STEP_PASSED,
  SET_APP_CONFIG,
  SET_WEEKEND,
  INIT_APP,
  SET_EMERGENCY_INFO,
} from './actionTypes';


// -----------------------------------------------------------------------
// SET INITIAL APP SETTINGS
export function initializeAppData() {
  Analytics.setUserId(DeviceInfo.getUniqueID());
  Analytics.setUserProperty('deviceName', DeviceInfo.getDeviceName());
  Analytics.setUserProperty('deviceNamePreset', DeviceInfo.getDeviceName());
  Mixpanel.identify(DeviceInfo.getUniqueID());
  Mixpanel.registerSuperProperties({"App Version": DeviceInfo.getReadableVersion()});
  Mixpanel.track("App Initialized!");
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
  Mixpanel.trackWithProperties('Onboard Step Passed', {step: onboardStep});
  return { type: ONBOARD_STEP_PASSED, onboardStep }
}


// -----------------------------------------------------------------------
// Set which schedule to show user (hello.js)

export function setWeekend(weekend) {
  Mixpanel.registerSuperProperties({"Weekend": ""+weekend});
  return { type: SET_WEEKEND, weekend }
}

// -----------------------------------------------------------------------
// Call this after weekend is selected and data is loaded from firebase

export function initApp() {
  return { type: INIT_APP }
}


// -----------------------------------------------------------------------
// Set Emergency contact info

export function setEmergencyDetails(name, details) {
  Mixpanel.set({"$email": details, "$name": name});
  return { type: SET_EMERGENCY_INFO, name, details }
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
