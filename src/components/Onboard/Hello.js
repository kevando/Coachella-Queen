import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Hello = (props) => {

    return (
      <View style={styles.container}>
      <Text style={styles.text}>
        Quickly create your schedule and save it as your lockscreen background.
      </Text>
      </View>
    );
}

export default Hello;
