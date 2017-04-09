import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Screenshot = (props) => {

    return (
      <View style={styles.container}>
      <Text style={styles.text}>Set this image as your lock screen</Text>
      </View>
    )
}

export default Screenshot;
