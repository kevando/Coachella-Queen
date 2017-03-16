// const Permissions = require('react-native-permissions');

import {
  ONBOARD_STEP_PASSED,
} from './actionTypes';

// export function checkNotificationPermission() {
//   // Thunk allows this async action
//   return function (dispatch) {
//     Permissions.getPermissionStatus('notification')
//       .then(response => {
//         dispatch({ type: SET_NOTIFICATION_PERMISSION, response })
//       });
//   };
// }

export function onboardStepPassed(onboardStep) {
  return { type: ONBOARD_STEP_PASSED, onboardStep }
}
