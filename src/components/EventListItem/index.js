import React from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';

import styles from './styles';

const EventListItem = (props) => {

  const { event } = props;

  return (
    <View style={styles.container}>
      <Text>{event.name}</Text>
      <Text>{moment(event.start).format('dddd')}</Text>
    </View>
  );
}


export default EventListItem;
