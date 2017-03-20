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

export function getMyDaySchedule(mySchedule,day) {

  // find only the events I selected
  var myDaySchedule = _.filter(mySchedule,function(event){
    return moment(event.start).format('dddd') == day
  });

  return _.sortBy(myDaySchedule,({start}) => {return start; })
}
