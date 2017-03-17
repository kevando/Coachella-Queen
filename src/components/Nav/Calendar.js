import React from 'react';
import { View, Text, TouchableOpacity, AlertIOS } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import moment from 'moment';
import * as Animatable from 'react-native-animatable';

import Routes from '../../config/routes';
import styles from './styles';

const Calendar = ({ navigator, day, mySchedule }) => {

  var mySchedule = _.filter(mySchedule, (event) => { return moment(event.start).format('dddd') == day })

  if(mySchedule.length == 0) return null;

  const onPress = () => navigator.push(Routes.getPreviewRoute(day));

  return (
    <TouchableOpacity onPress={onPress} style={styles.touchableCalendar}>
      <Animatable.Text animation="fadeInDown" style={styles.calendar} >🗓️</Animatable.Text>
    </TouchableOpacity>
  );
}

const mapStateToProps = (state) => {
  return {
    mySchedule: state.events.mySchedule
  };
};


export default connect(mapStateToProps)(Calendar)
