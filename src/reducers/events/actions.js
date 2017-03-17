import {
  SET_SCHEDULE_DATA,
  TOGGLE_EVENT,
  REFRESH_SCHEDULE,
} from './actionTypes';

import { scheduleRef } from '../../config/firebase';

// -----------------------------------------------------------------------
// Take events array and overwrite coachellaSchedule[]

export function setScheduleData(events) {
  return { type: SET_SCHEDULE_DATA, events }
}

// -----------------------------------------------------------------------
// Get data from firebase then overwrite coachellaSchedule[]

export function refreshSchedule() {
  return dispatch => {

    scheduleRef.once('value', (snap) => {

      var events = [];
      snap.forEach((child) => {
        events.push({
          name: child.val().name,
          stage: child.val().stage,
          start: child.val().start,
          end: child.val().end,
          _key: child.key
        });
      });
      dispatch(setScheduleData(events));
    }); // scheduleRef.once
  }
}

// -----------------------------------------------------------------------
// Add or remove event from mySchedule[]

export function toggleEvent(event) {
  return { type: TOGGLE_EVENT, event }
}
