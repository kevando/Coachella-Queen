import React from 'react';
import { View, Text, TouchableOpacity, AlertIOS } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import moment from 'moment';

import Routes from '../../config/routes';
import styles from './styles';

const PreviewButton = ({ navigator, day, mySchedule }) => {

  var mySchedule = _.filter(mySchedule, (event) => { return moment(event.start).format('dddd') == day })

  if(mySchedule.length == 0) return null;

  const onPress = () => navigator.push(Routes.getPreviewRoute(day));

  return (
    <TouchableOpacity onPress={onPress} style={styles.touchable}>
      <Text style={styles.calendar} >🗓️</Text>
    </TouchableOpacity>
  );
}

const mapStateToProps = (state) => {
  return {
    mySchedule: state.events.mySchedule
  };
};


export default connect(mapStateToProps)(PreviewButton)
