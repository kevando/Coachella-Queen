import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import moment from 'moment';

import styles from './styles';

const EventListItem = (props) => {

  const { event, onPress } = props;

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => onPress(event)}>
      <View style={[styles.container,{backgroundColor: event.selected ? '#ddd' : '#fff',borderColor: event.selected ? '#333' : '#ccc'}]}>
        <Text style={styles.band}>{event.name}</Text>
        <Text style={styles.stage}>{event.stage}</Text>
        <Text style={styles.time}>{moment(event.start).format('h:mm')}</Text>
      </View>
    </TouchableOpacity>
  );
}


export default EventListItem;
