import React from 'react';
import { View, ListView, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';

import { EventListItem,  } from '../../components';
import styles from './styles';

const Dashboard = (props) => {


  const { dataSource, toggleEvent, day, onPress } = props;



  return (
    <View style={{flex:1}}>
      <Text style={styles.title}>{day}</Text>
      <ListView
        enableEmptySections={true}
        style={styles.listContainer}
        dataSource={dataSource}
        renderRow={(rowData) => <EventListItem event={rowData} toggleEvent={toggleEvent} />}
      />


      </View>
  );
}



export default Dashboard;
