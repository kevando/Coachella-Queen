import React from 'react';
import { View, Text } from 'react-native';
import { Left, Body, Right, Switch, ListItem, Icon, Button } from 'native-base';

import styles from './styles';

const Screenshot = (props) => {

    return (
      <View style={styles.container}>
      <Text style={styles.text}>Take a Screenshot of the following screen</Text>
      <Text style={styles.text}>Set the image as your background!</Text>
      <Text style={styles.text}>Tap anywhere to go back to the schedule</Text>

      </View>
    )


}

export default Screenshot;
