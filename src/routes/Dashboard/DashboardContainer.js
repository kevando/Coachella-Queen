import React, { Component } from 'react';
import { ListView } from 'react-native';
import moment from 'moment';
import _ from 'lodash';

import Dashboard from './Dashboard';
import Routes from '../../config/routes';

class DashboardContainer extends Component {

  constructor() {
    super();
  }

  componentWillMount() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const { schedule, day } = this.props;
    const daySchedule = _.filter(schedule,({start}) => { return moment(start).format('dddd') == day})
    this.setState({
      dataSource: ds.cloneWithRows(daySchedule)
    })
  }

  render() {

    const { navigator } = this.props;

    return (
      <Dashboard
        {...this.props}
        {...this.state}
        onNewRecPress={() => navigator.push(Routes.getHelloRoute())}
      />
      )

  }
}

export default DashboardContainer;
