import React from 'react';
import { View, ListView, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';

import { EventListItem,  } from '../../components';
import styles from './styles';

const Dashboard = (props) => {


  const { dataSource, onArtistPress, day, onPress } = props;



  return (
    <View style={styles.container}>
      <Text style={styles.title}>{day}</Text>
      <ListView
        enableEmptySections={true}
        style={styles.listContainer}
        dataSource={dataSource}
        renderRow={(rowData) => <EventListItem event={rowData} onPress={onArtistPress} />}
      />

      <TouchableOpacity onPress={onPress}><Text>Export</Text></TouchableOpacity>
      </View>
  );
}



export default Dashboard;
