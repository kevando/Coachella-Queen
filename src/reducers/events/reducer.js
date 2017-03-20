var Analytics = require('react-native-firebase-analytics');
import _ from 'lodash';

import {
  SET_SCHEDULE_DATA,
  TOGGLE_EVENT,
  REFRESH_SCHEDULE,
} from './actionTypes';

const initialState =
  {
    coachellaSchedule: [],
    mySchedule: [],
  };

export default function events(events = initialState, action = {}) {

  switch (action.type) {

    // -------------------------------------------
    // Called from REFRESH_SCHEDULE

    case SET_SCHEDULE_DATA:
    Analytics.logEvent('SET_SCHEDULE_DATA');
      return {
        ...events,
        coachellaSchedule: action.events
      }

    // -------------------------------------------
    // Called each band tap

    case TOGGLE_EVENT:
      const isFound = _.find(events.mySchedule,({name}) => {return name == action.event.name })

      var newList;
      if(isFound){

        // Remove event from schedule
        newList = _.filter(events.mySchedule, function(event){return event.name != action.event.name} );
      } else {
        // Add to schedule

        newList = [action.event].concat(events.mySchedule);
        Analytics.logEvent('artist_added', {
          'artist': action.event.name
        });
      }

      return {
        ...events,
        mySchedule: newList,
      }

    // -------------------------------------------
    default:
      return events;
  }
}
