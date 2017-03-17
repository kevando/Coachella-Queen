import React from 'react';
import { View, } from 'react-native';
import _ from 'lodash';
import { Container, Content, Left, Body, Right, Radio, Switch, List, ListItem, Text, Icon, Button, Badge } from 'native-base';

import { database, scheduleRef } from '../../config/firebase';

import styles from './styles';

const Debug = (props) => {

  const { version, deviceId, deviceName} = props.app;

  return (
    <Container>
      <Content>

        <ListItem itemDivider>
          <Text>Debug Info</Text>
        </ListItem>

        <ListItem icon>
          <Body>
            <Text>App Version</Text>
          </Body>
          <Right>
            <Text>{version}</Text>
          </Right>
        </ListItem>
        <ListItem icon>
          <Body>
            <Text>Device Name</Text>
          </Body>
          <Right>
            <Text>{deviceName}</Text>
          </Right>
        </ListItem>
        <ListItem icon>
          <Body>
            <Text>Device ID</Text>
          </Body>
          <Right>
            <Text>{deviceId}</Text>
          </Right>
        </ListItem>

        <ListItem itemDivider>
          <Text>Danger Zone</Text>
        </ListItem>

        <ListItem icon>
          <Body>
            <Text>App Data</Text>
          </Body>
          <Right>
            <Button rounded danger small onPress={props.onPurgePress}>
              <Text>Delete</Text>
            </Button>
          </Right>
        </ListItem>



      </Content>
    </Container>
  );

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
