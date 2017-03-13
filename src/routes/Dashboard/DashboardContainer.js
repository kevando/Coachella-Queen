import React, { Component } from 'react';
import { ListView } from 'react-native';
import moment from 'moment';
import _ from 'lodash';

import Dashboard from './Dashboard';
import Routes from '../../config/routes';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class DashboardContainer extends Component {

  // constructor() {
  //   super();
  // }

  componentWillMount() {
    this._prepareList(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // @todo by updating the listview from redux, this saves alot of render code
    // BUT it does seem to slow things down when user taps an event
    this._prepareList(nextProps);
  }

  _prepareList(props) {
    const { schedule, day, mySchedule } = props;
    var daySchedule = _.filter(schedule,({start}) => { return moment(start).format('dddd') == day})

    // find all the events already part of the user's mySchedule array
    var combinedSchedules = _.map(daySchedule,function(event){
      event.selected = _.some(mySchedule, event);
      return event;
    });

    var sortedSchedule = _.sortBy(combinedSchedules,({name}) => {return name; })

    // Now set the array
    this.setState({
      dataSource: ds.cloneWithRows(sortedSchedule)
    });

  }

  render() {

    const { navigator } = this.props;

    return (
      <Dashboard
        {...this.props}
        {...this.state}
      />
      )

  }
}

export default DashboardContainer;
