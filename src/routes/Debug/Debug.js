import React from 'react';
import { View, Text } from 'react-native';
import { Left, Body, Right, Switch, ListItem, Icon, Button } from 'native-base';

import styles from './styles';

const Debug = (props) => {

  const { version, deviceId, deviceName} = props.app;

    return (
      <View style={styles.container}>

        <ListItem>
          <Body>
            <Text style={styles.text}>App Version</Text>
          </Body>
          <Right>
            <Text style={styles.text}>{version}</Text>
          </Right>
        </ListItem>

        <ListItem>
          <Body>
            <Text style={styles.text}>Username</Text>
          </Body>
          <Right>
            <Text style={styles.text}>Unknown</Text>
          </Right>
        </ListItem>

        <ListItem icon>
          <Body>
            <Text style={styles.text}>Feedback</Text>
          </Body>
          <Right>
            <Button info small onPress={props.onSendFeedbackPress}>
              <Text>Send Email</Text>
            </Button>
          </Right>
        </ListItem>

        <ListItem icon>
          <Body>
            <Text style={styles.text}>Data</Text>
          </Body>
          <Right>
            <Button danger small onPress={props.onPurgePress}>
              <Text>Purge Data</Text>
            </Button>
          </Right>
        </ListItem>

      </View>
    )


}
// <ListItem>
//   <Left>
//     <Text>Airplane Mode</Text>
//   </Left>
//   <Right>
//     <Switch valur={false} />
//   </Right>
// </ListItem>
export default Debug;
