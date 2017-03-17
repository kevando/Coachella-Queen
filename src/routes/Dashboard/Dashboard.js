import React from 'react';
import { View, ListView, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { EventListItem } from '../../components';
import styles from './styles';

const skyGradient = {
  colors: ['#7dcdce', '#6093c2', '#f6b4cf'],
  locations: [0.1,0.5,1.0],
}

const Dashboard = (props) => {


  const { dataSource, onArtistPress } = props;

  return (
    <LinearGradient {...skyGradient} style={styles.container} >
      <ListView
        style={styles.listContainer}
        dataSource={dataSource}
        renderRow={(rowData) => <EventListItem event={rowData} onPress={onArtistPress} />}
      />
    </LinearGradient>
  );
}



export default Dashboard;
