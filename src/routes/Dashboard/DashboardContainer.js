import React, { Component } from 'react';
import { ListView, View, TouchableOpacity, Text, Animated } from 'react-native';
import moment from 'moment';
import _ from 'lodash';
import * as Animatable from 'react-native-animatable';
var Analytics = require('react-native-firebase-analytics');

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
      hasData: false,
      listOpacity: new Animated.Value(0),
      exportOpacity: new Animated.Value(0),
    }
  }

  componentWillMount() {
    if(this.props.app.initialized == true)
      this._prepareList(this.props);
  }

  componentWillReceiveProps(nextProps) {

    // fuck this
    // refreshing the components every fucking time
    // @todo change this
    this._prepareList(nextProps);

    // if(nextProps.app.initialized == true && !this.state.hasData){
    //   // alert('then we gotta show data!')
    //   this._prepareList(nextProps);
    //   // this.setState({hasData: true})
    // }
  }

  _prepareList(props) {
    // this function refreshes the presentation data from redux,
    // this is not really how it should work, i dont think


    const daySchedule = getDaySchedule(props);
    const myDaySchedule = getMyDaySchedule(props);
    // console.log('daySchedule',daySchedule)

    // Now set the array
    this.setState({
      dataSource: this.state.ds.cloneWithRows(daySchedule),
      daySchedule,
      hasData: true,
      myDaySchedule,
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



  _showExport() {
    // this._hideList();
    // this._displayExport();
    this.setState({showExport: true});

    Analytics.logEvent('view_export', {
      'day': this.props.day,
      'scheduleLength': this.state.myDaySchedule.length
    });
  }
  _showList() {
    // this._hideExport();
    // this._displayList();
    this.setState({showExport: false})
  }

  render() {
    if(!this.state.hasData)
      return null;

    return (
      <View style={styles.container}>

        {
          this.state.showExport ?
          <Export
              onPress={this._showList.bind(this)} 
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

        {
          this.state.showExport &&
          <TouchableOpacity onPress={this._showList.bind(this)} style={styles.button}>
            <Animatable.Text style={styles.buttonText} animation="fadeOut" delay={3000}>Tap again to go back</Animatable.Text>
          </TouchableOpacity>
        }

        {!this.state.showExport && this.state.myDaySchedule.length > 0 &&
          <TouchableOpacity onPress={this._showExport.bind(this)} style={styles.button}>
            <Text style={styles.buttonText}>View Schedule</Text>
          </TouchableOpacity>
        }






      </View>
      )

  }

}

export default DashboardContainer;
