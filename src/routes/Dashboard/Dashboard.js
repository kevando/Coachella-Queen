import React from 'react';
import { View, ScrollView } from 'react-native';
import _ from 'lodash';
import { ListItem, Text, Icon } from 'native-base';

// import Button from '../../components/Button';
// import Card from '../../components/Card';
// import EnableReminders from '../../components/EnableReminders';
import styles from './styles';

const Dashboard = (props) => {

  const { recommendations, onNewRecPress, app, setReminder, setNotificationPermission } = props;

  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
    </View>
  );
}

export default Dashboard;
