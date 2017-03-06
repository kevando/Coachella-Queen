import React, { Component } from 'react';
import {View,Text} from 'react-native';
import { Router } from 'react-native-router-flux';

import { scenes } from './screens';
import { routerStyles } from './config/styles';

export default class App extends Component {


  render() {
    return <Router {...this.state} scenes={scenes} {...routerStyles} />
  }

  renderr() {
    return <View><Text>dude</Text></View>
  }
}
