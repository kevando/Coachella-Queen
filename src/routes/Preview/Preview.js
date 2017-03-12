import React from 'react';
import { View, ListView, Text } from 'react-native';
import _ from 'lodash';
import moment from 'moment';

import { EventListItem } from '../../components';



import styles from './styles';

const Preview = (props) => {

  const { daySchedule } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coachella Queen</Text>
      <View style={styles.textContainer}>
        {_.map(daySchedule,(event,i)=> {return (
          <Text style={styles.text} key={i}>{moment(event.start).format('h:mm')} @ {event.stage} - {event.name}</Text>
        )})}
      </View>
    </View>
  );
}


export default Preview;
