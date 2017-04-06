import React, { Component } from 'react';
import { ListView, View, TouchableOpacity, Text, Animated, LayoutAnimation } from 'react-native';
import moment from 'moment';
import _ from 'lodash';
import {Icon} from 'native-base';
import * as Animatable from 'react-native-animatable';
import * as Onboard from '../../components/Onboard';
var Analytics = require('react-native-firebase-analytics');

import ScheduleList from './ScheduleList';
import Export from './Export';
import Routes from '../../config/routes';
import { getDaySchedule, getMyDaySchedule, getScheduleByDay } from '../../config/helpers';
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
    // if(this.props.app.initialized == true)
    //   this._prepareList(this.props);

    this._prepareList(this.props);
  }
  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  componentDidUpdate(){
    // Run checks and see if we should show the user an onboard message

    if(this.state.showExport && this.props.app.onboarding.screenshot.show) {
      this.props.onboardStepPassed('screenshot');
      this.props.openModal(<Onboard.Screenshot />, 'Save Your Schedule');
    }

    const mySchedule = _.filter(this.props.smartSchedule,(event) => { return event.interest; })

    if(mySchedule.length == 1 && this.props.app.onboarding.options.show) {
      // Show this modal after the user sets interest on first item
      this.props.onboardStepPassed('options');
      this.props.openModal(<Onboard.Options />, 'What do these mean?');
    }


  }

  componentWillReceiveProps(nextProps) {

    // fuck this
    // refreshing the components every fucking time
    // @todo change this
    // this._prepareList(nextProps);

    // if(nextProps.app.initialized == true && !this.state.hasData){
    //   // alert('then we gotta show data!')
    //   this._prepareList(nextProps);
    //   // this.setState({hasData: true})
    // }
  }

  // _prepareList_og(props) {
  //   // this function refreshes the presentation data from redux,
  //   // this is not really how it should work, i dont think
  //
  //
  //   const daySchedule = getDaySchedule(props);
  //   const myDaySchedule = getMyDaySchedule(props);
  //   // console.log('daySchedule',daySchedule)
  //
  //   // Now set the array
  //   this.setState({
  //     dataSource: this.state.ds.cloneWithRows(daySchedule),
  //     daySchedule,
  //     hasData: true,
  //     myDaySchedule,
  //   });
  //
  // }
  _prepareList(props) {

    const daySchedule = getDaySchedule(props);
    // const myDaySchedule = getMyDaySchedule(props);

    const smartDaySchedule = getScheduleByDay(props.smartSchedule,props.day);

    // Now set the array
    this.setState({
      // dataSource: this.state.ds.cloneWithRows(daySchedule),
      dataSource: this.state.ds.cloneWithRows(smartDaySchedule),
      smartDaySchedule,
      hasData: true,
      // myDaySchedule,
    });

  }


  toggleDisplay() {
    // toggle display
    this.setState({showExport: !this.state.showExport})
    this._prepareList(this.props);

  }


  _showExport() {
    this.setState({showExport: true});
  }
  _showList() {
    this.setState({showExport: false})
  }

  renderViewScheduleButton(count) {
    return (
      <TouchableOpacity onPress={this._showExport.bind(this)} style={styles.viewScheduleButton}>
        <Icon ios='ios-calendar' android="md-calendar" style={{color: '#fff',textAlign:'center',}} />
        <Text style={styles.calendarNumber}>{count}</Text>
      </TouchableOpacity>
    )
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
            renderViewScheduleButton={this.renderViewScheduleButton.bind(this)}
            {...this.props}
            {...this.state}
          />
        }





      </View>
      )

  }

}

export default DashboardContainer;
