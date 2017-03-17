import React, { Component } from 'react';
import { ListView } from 'react-native';
import moment from 'moment';
import _ from 'lodash';

import Dashboard from './Dashboard';
import Routes from '../../config/routes';
import { getDaySchedule } from '../../config/helpers';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class DashboardContainer extends Component {

  componentWillMount() {
    this._prepareList(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // @todo by updating the listview from redux, this saves alot of render code
    // BUT it does seem to slow things down when user taps an event
    this._prepareList(nextProps);
  }

  _prepareList(props) {
    // const { coachellaSchedule, day, mySchedule } = props;

    const daySchedule = getDaySchedule(props);

    // Now set the array
    this.setState({
      dataSource: ds.cloneWithRows(daySchedule),
    });

  }

  onArtistPress(event) {
    // alert(event.name)
    this.props.toggleEvent(event)

  }

  render() {

    const { navigator } = this.props;

    return (
      <Dashboard
        onArtistPress={this.onArtistPress.bind(this)}
        {...this.props}
        {...this.state}
      />
      )

  }
}

export default DashboardContainer;
