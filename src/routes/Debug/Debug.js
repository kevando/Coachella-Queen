import React from 'react';
import _ from 'lodash';
import { Container, Content, Left, Body, Right, Radio, Switch, List, ListItem, Text, Icon, Button, Badge } from 'native-base';


import styles from './styles';

const Debug = (props) => {

  const { recommendations, onPurgePress, app, onFeedbackPress, notificationPermission } = props;

  return (
    <Container>
      <Content>
        <List>

          <ListItem itemDivider style={styles.headerr}>
            <Text>Application Info</Text>
          </ListItem>

          <ListItem iconLeft>
            <Icon name="ios-phone-portrait" />
            <Text>Device</Text>
            <Text note>{app.deviceName}</Text>
          </ListItem>

          <ListItem iconLeft>
            <Icon name="ios-phone-portrait" />
            <Text>Version</Text>
            <Text note>{app.version}</Text>
          </ListItem>

          <ListItem iconLeft>
            <Icon name="ios-phone-portrait" />
            <Text>Notifications</Text>
            <Text note>{app.notificationPermission}</Text>
          </ListItem>


          <ListItem itemDivider style={styles.headerr}>
            <Text>Application Data</Text>
          </ListItem>


          <ListItem iconLeft>
            <Icon name="ios-settings-outline" style={{ color: '#0A69FE' }} />
            <Text>Recommendations</Text>
            <Badge style={{ backgroundColor: '#8C97B5' }}>{recommendations.length}</Badge>
          </ListItem>

          <ListItem iconLeft>
            <Icon name="ios-alert" style={{ color: '#8C97B5' }} />
            <Text>Purge Data</Text>
            <Button danger onPress={onPurgePress}>Purge Data</Button>
          </ListItem>

          <ListItem itemDivider style={styles.headerr}>
            <Text>Support</Text>
          </ListItem>

          <ListItem iconLeft>
            <Icon name="ios-mail" />
            <Text>Send Feedback</Text>
            <Button info onPress={onFeedbackPress}>Send Mail</Button>
          </ListItem>

        </List>

      </Content>
  </Container>
  );
}

export default Debug;
