// const Permissions = require('react-native-permissions');

import {
  ONBOARDED,
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

export function onboarded() {
  return { type: ONBOARDED }
}
