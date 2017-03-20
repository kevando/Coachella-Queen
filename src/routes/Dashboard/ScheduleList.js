import React from 'react';
import { View, ListView, Text, TouchableOpacity, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';

import { EventListItem,  } from '../../components';
import styles from './styles';


const Dashboard = (props) => {

  const { dataSource, toggleEvent, day, myDaySchedule, daySchedule } = props;

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


// {
//   _.map(myDaySchedule,(event,i)=>{return <Text key={i}>{event.name}</Text>})
// }

// {
//   _.map(daySchedule,(event,i)=>{return <Text key={i}>{event.name} - {event.selected && 'selected'}</Text>})
// }
export default Dashboard;
