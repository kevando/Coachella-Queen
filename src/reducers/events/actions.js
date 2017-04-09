var Mixpanel = require('react-native-mixpanel');

import {
  SET_SCHEDULE_DATA,
  TOGGLE_EVENT,
  REFRESH_SCHEDULE,
  SET_INTEREST,
  SET_WEEKEND_DATA,
} from './actionTypes';

import { scheduleRef } from '../../config/firebase';

// -----------------------------------------------------------------------
// Take events array and overwrite coachellaSchedule[]

export function setScheduleData(events,weekend) {
  return { type: SET_SCHEDULE_DATA, events, weekend }
}

// -----------------------------------------------------------------------
// Get data from firebase then overwrite coachellaSchedule[]

export function refreshSchedule() {
  return dispatch => {

    scheduleRef.child('weekend1/schedule').once('value', (snap) => {
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
      dispatch(setScheduleData(events,1));
    }); // scheduleRef.once

    scheduleRef.child('weekend2/schedule').once('value', (snap) => {
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
      dispatch(setScheduleData(events,2));
    }); // scheduleRef.once
  }
}


// -----------------------------------------------------------------------
// Add or remove event from mySchedule[]

export function setInterest(event,interest) {
  Mixpanel.trackWithProperties('User Set Interest',{artist: event.name,interest})
  return { type: SET_INTEREST, event, interest }
}

// -----------------------------------------------------------------------
//

export function setWeekendData(weekend) {
  return { type: SET_WEEKEND_DATA, weekend }
}
