import React from 'react';
import { View, ListView, Text } from 'react-native';

import { EventListItem } from '../../components';



import styles from './styles';

const Dashboard = (props) => {

  const { dataSource, toggleEvent } = props;

  return (
    <View style={styles.container}>
      <ListView
        dataSource={dataSource}
        renderRow={(rowData) => <EventListItem event={rowData} onPress={toggleEvent} />}
      />
    </View>
  );
}


export default Dashboard;
