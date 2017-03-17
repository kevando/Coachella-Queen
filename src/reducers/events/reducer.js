import _ from 'lodash';
// var uuid = require('react-native-uuid');

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

    case SET_SCHEDULE_DATA:
      return {
        ...events,
        coachellaSchedule: action.events
      }
    // -------------------------------------------


    case TOGGLE_EVENT:
      const isAleadyScheduled = _.some(events.mySchedule, action.event)
      var newList;
      if(isAleadyScheduled){
        // Remove event from schedule
        newList = _.filter(events.mySchedule, function(event){return event.name != action.event.name} );
      } else {
        // Add to schedule
        newList = [action.event].concat(events.mySchedule);
      }
      return {
        ...events,
        mySchedule: newList,
      }
    // -------------------------------------------



    // // -------------------------------------------
    // case SET_REMINDER:
    //
    //   var newList = _.map(recommendations.list, function(rec) {
    //     return rec.id === action.recId ? {...rec,reminder: true} : rec;
    //   });
    //
    //   return {
    //     ...recommendations,
    //     list: newList,
    //   }

    // -------------------------------------------
    default:
      return events;
  }
}
