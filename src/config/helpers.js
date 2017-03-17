import moment from 'moment';

export function getDaySchedule({ coachellaSchedule, day, mySchedule }) {


  var daySchedule = _.filter(coachellaSchedule,({start}) => { return moment(start).format('dddd') == day})

  // find all the events already part of the user's mySchedule array
  var combinedSchedules = _.map(daySchedule,function(event){
    event.selected = _.some(mySchedule, event);
    return event;
  });

  var sortedSchedule = _.sortBy(combinedSchedules,({start}) => {return start; })

  return sortedSchedule;

}
