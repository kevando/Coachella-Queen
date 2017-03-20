import React, { Component } from 'react';
import { ListView, View, TouchableOpacity, Text } from 'react-native';
import moment from 'moment';
import _ from 'lodash';

import ScheduleList from './ScheduleList';
import Export from './Export';
import Routes from '../../config/routes';
import { getDaySchedule, getMyDaySchedule } from '../../config/helpers';
import styles from './styles';

class DashboardContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ds: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
      showExport: false,
    }
  }

  componentWillMount() {
    this._prepareList(this.props);
  }

  _prepareList(props) {

    const daySchedule = getDaySchedule(props);
    // const myDaySchedule = getMyDaySchedule(props);

    // Now set the array
    this.setState({
      dataSource: this.state.ds.cloneWithRows(daySchedule),
      daySchedule,
      // myDaySchedule,
    });

  }

  _toggleEvent(event) {
    this.props.toggleEvent(event);
    this._prepareList(this.props);

  }

  toggleDisplay() {
    // toggle display
    this.setState({showExport: !this.state.showExport})
    this._prepareList(this.props);

  }

  _renderButtonText() {
    if(this.state.showExport)
      return 'Take a screen shot';
    else
      return 'Show my schedule'
  }

  render() {

    return (
      <View style={styles.container}>
      {this.state.showExport ?
        <Export
          {...this.props}
          {...this.state}
        />
        :
        <ScheduleList
          toggleEvent={this._toggleEvent.bind(this)}
          {...this.props}
          {...this.state}
        />


      }

        <TouchableOpacity onPress={this.toggleDisplay.bind(this)} style={styles.button}>
          <Text style={styles.buttonText}>{ this._renderButtonText() }</Text>
        </TouchableOpacity>
      </View>
      )

  }
}
// <Export
//   onArtistPress={this.onArtistPress.bind(this)}
//   onPress={this.onExportPress.bind(this)}
//   {...this.props}
//   {...this.state}
// />
export default DashboardContainer;
