import React from 'react';
import { View, } from 'react-native';
import _ from 'lodash';
import { Container, Content, Left, Body, Right, Radio, Switch, List, ListItem, Text, Icon, Button, Badge } from 'native-base';

import { database, scheduleRef } from '../../config/firebase';

import styles from './styles';

const Debug = (props) => {

  return (
    <View style={styles.container} >
      <Text>debug</Text>

      <Text>Total Events: {props.coachellaSchedule.length}</Text>
      <Text>My Events: {props.mySchedule.length}</Text>
      <Text onPress={props.refreshSchedule}>Refresh schedule</Text>


    </View>
  );


}

export default Debug;
