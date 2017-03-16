import React from 'react';
import { View, } from 'react-native';
import _ from 'lodash';
import { Container, Content, Left, Body, Right, Radio, Switch, List, ListItem, Text, Icon, Button, Badge } from 'native-base';

import { database, scheduleRef } from '../../config/firebase';

import styles from './styles';

// const Debug = (props) => {
class Debug extends React.Component{

  // const { nothing } = props;

  state = {data: []}

  componentDidMount() {
    // var itemsRef = firebaseApp.database().ref('v1/schedule');
    //
    scheduleRef.once('value', (snap) => {

      // get children as an array
      var items = [];
      snap.forEach((child) => {
        items.push({
          name: child.val().name,
          _key: child.key
        });
      });


      this.setState({
        // dataSource: this.state.dataSource.cloneWithRows(items)
        data: items,
      });

    });

  }

  render() {
    return (
      <View style={styles.container} >
        <Text>debug</Text>
        <Text>{this.state.data.length}</Text>
        <Text>{this.props.firebaseData.length}</Text>
        <Text onPress={this.props.refreshSchedule}>Refresh schedule</Text>


      </View>
    );
  }

}

export default Debug;
