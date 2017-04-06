import React from 'react';
import { View, ListView, Text, TouchableOpacity, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';

import { EventListItem,  } from '../../components';
import styles from './styles';
import { getDaySchedule, getMyDaySchedule, getScheduleByDay } from '../../config/helpers';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

const Dashboard = (props) => {

  const { dataSource, toggleEvent, day, setInterest, smartSchedule, renderViewScheduleButton } = props;

  const smartDaySchedule = getScheduleByDay(smartSchedule,props.day);

  const myDaySchedule = _.filter(smartDaySchedule,(event) => { return event.interest == 'yes' })

  return (

    <View style={styles.scheduleListContainer}>

      <Text style={styles.title}>{day}</Text>

      { myDaySchedule.length > 0 &&
        <View>
          {renderViewScheduleButton(myDaySchedule.length)}
        </View>

      }
      <ListView
        enableEmptySections={true}
        style={styles.listContainer}
        dataSource={ds.cloneWithRows(smartDaySchedule)}
        renderRow={(rowData) => <EventListItem event={rowData} toggleEvent={toggleEvent} setInterest={setInterest} />}
      />



      </View>
  );
}



export default Dashboard;




// <ScrollView style={styles.horizontalScheduleContainer} horizontal={true}>
// {
//   _.map(myDaySchedule,(event,i) => {
//     return <View key={i} style={styles.horizontalScheduleEvent}><Text style={[styles.horizontalScheduleText]}>{event.name}</Text></View>
//   })
// }
// </ScrollView>
