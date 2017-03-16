import {
  SET_SCHEDULE_DATA,
  TOGGLE_EVENT,
  REFRESH_SCHEDULE,
} from './actionTypes';

import { cheduleRef } from '../../config/firebase';

export function setScheduleData(events) {
  return { type: SET_SCHEDULE_DATA, events }
}

export function refreshSchedule() {
  return dispatch => {
    // alert('im called')
    scheduleRef.once('value', (snap) => {

      // get children as an array
      var items = [];
      snap.forEach((child) => {
        items.push({
          name: child.val().name,
          _key: child.key
        });
      });

      // Now take the items array and dispatch action
      // that will set the array to the store
      dispatch(setScheduleData(items));

    }); // once

  }
}

export function toggleEvent(event) {
  return { type: TOGGLE_EVENT, event }
}
