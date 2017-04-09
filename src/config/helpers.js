import moment from 'moment';

export function getDaySchedule({ smartSchedule, day, mySchedule }) {


  var daySchedule = _.filter(smartSchedule,({start}) => { return moment(start).format('dddd') == day})

  // find all the events already part of the user's mySchedule array
  var combinedSchedules = _.map(daySchedule,function(event){
    const isFound = _.find(mySchedule,({name}) => {return name == event.name })
    if(isFound) {
      // console.log('BITCH FOUND',event.name)
      event.selected = true;
    } else {
      event.selected = false;
    }
    return event;
  });

  return _.sortBy(combinedSchedules,({start}) => {return start; })


}

export function getMyDaySchedule({mySchedule,day}) {

  // find only the events I selected
  var myDaySchedule = _.filter(mySchedule,function(event){
    return moment(event.start).format('dddd') == day
  });

  return _.sortBy(myDaySchedule,({start}) => {return start; })
}

export function getScheduleByDay(schedule, day) {

  var daySchedule = _.filter(schedule,({start}) => { return moment(start).format('dddd') == day})

  return _.sortBy(daySchedule,({start}) => {return start; })


}
