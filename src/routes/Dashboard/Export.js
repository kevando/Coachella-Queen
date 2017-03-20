import React from 'react';
import { View, ListView, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';

import { EventListItem,  } from '../../components';
import styles from './styles';
import { getMyDaySchedule, getDaySchedule } from '../../config/helpers';

const Export = (props) => {

  const { mySchedule, myDaySchedule, day } = props;

  const myDaySchedulee = getMyDaySchedule(mySchedule,day);

  return (
    <View style={styles.exportContainer}>
      {
        _.map(myDaySchedulee,(event, i) => {return <Text key={i} >{event.name}</Text>})
      }

      </View>
  );
}



export default Export;
