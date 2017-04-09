var Analytics = require('react-native-firebase-analytics');
import _ from 'lodash';
import moment from 'moment';

import {
  SET_SCHEDULE_DATA,
  TOGGLE_EVENT,
  REFRESH_SCHEDULE,
  SET_INTEREST,
  SET_WEEKEND_DATA
} from './actionTypes';

const initialState =
  {
    coachellaSchedule1: [],
    coachellaSchedule2: [],
    mySchedule: [],
    smartSchedule: [],
  };

export default function events(events = initialState, action = {}) {

  switch (action.type) {

    // -------------------------------------------
    // Called from REFRESH_SCHEDULE

    case SET_SCHEDULE_DATA:
      if(action.weekend == 1) {
        return {
          ...events,
          coachellaSchedule1: action.events,
        }
      }
      if(action.weekend == 2) {
        return {
          ...events,
          coachellaSchedule2: action.events,
        }
      }

    // -------------------------------------------
    // Called from REFRESH_SCHEDULE

    case SET_WEEKEND_DATA:
      if(action.weekend == 1) {
        return {
          ...events,
          smartSchedule: events.coachellaSchedule1,
        }
      }
      if(action.weekend == 2) {
        return {
          ...events,
          smartSchedule: events.coachellaSchedule2,
        }
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
          'item_id': action.event.name,
        });
      }

      return {
        ...events,
        mySchedule: newList,
      }

      // -------------------------------------------
      //

      case SET_INTEREST:

        // Find event index
        var index = _.indexOf(events.smartSchedule, _.find(events.smartSchedule, {name: action.event.name}));
        // console.log('found event at index: '+index)

        // Iterate the schedule and find clashes
        // not at all implemented correctly
        var newArr = _.map(events.smartSchedule,(event) => {
          // do this just for the day
          if(moment(action.event.start).format('dddd') == moment(event.start).format('dddd')) {
            if(event.name == action.event.name) {
              event.interest = action.interest;
              // event.clash = 'none';
            } else if (moment(action.event.start).isBefore(event.end) && moment(action.event.end).isAfter(event.start)) {
                event.clash = 'potential';
            }
          }

          return event;
        })

        // Replace item at index using native splice
        newArr.splice(index, 1, {...action.event,interest: action.interest});

        return {
          ...events,
          smartSchedule: newArr,
        }

    // -------------------------------------------
    default:
      return events;
  }
}
