import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Hello = (props) => {

    return (
      <View style={styles.container}>
      <Text style={styles.title}>
        Tap the bands you want to see and add
        them to your schedule.
      </Text>

      </View>
    );
}

export default Hello;
