import React from 'react';
import { View, ListView, Text, TouchableOpacity, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import moment from 'moment';

import { EventListItem,  } from '../../components';
import styles from './styles';
import { getMyDaySchedule, getDaySchedule } from '../../config/helpers';

const Export = (props) => {

  const { mySchedule, myDaySchedule, day, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.exportContainer}>
    <StatusBar hidden={true} />
      {
        _.map(myDaySchedule,(event, i) => {
          return (
            <Text style={styles.exportText} key={i} >
              <Text style={styles.exportStartText}>{moment(event.start).format('h:mm')} </Text>
              <Text style={styles.exportBandText}>{event.name} </Text>
              <Text style={styles.exportStageText}>{event.stage}</Text>
            </Text>
          )
        })
      }

      </View>
      </TouchableOpacity>
  );
}



export default Export;
