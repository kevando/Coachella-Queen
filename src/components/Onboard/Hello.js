import React from 'react';
import { View, Text } from 'react-native';
import { Left, Body, Right, Switch, ListItem, Icon, Button } from 'native-base';

import styles from './styles';

const Hello = (props) => {

    return (
      <View style={styles.container}>
      <Text style={styles.text}>1. Select bands</Text>
      <Text style={styles.text}>2. View your schedule</Text>
      <Text style={styles.text}>3. Share with you friends!</Text>




      </View>
    )


}
// cant pass in close function yet
// @todo
// <Button info full onPress={props.onButtonPress} style={{marginVertical:15,marginHorizontal:0}}>
//   <Text style={styles.text}>I got this.</Text>
// </Button>

export default Hello;
