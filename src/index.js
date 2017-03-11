import React, { Component } from 'react';
import {View,Text} from 'react-native';
import { Router } from 'react-native-router-flux';

import { scenes } from './screens';
import { routerStyles, colors } from './config/styles';

const getSceneStyle = (/* NavigationSceneRendererProps */ props, computedProps) => {
  const style = {
    // flex: 1,
    backgroundColor: colors.blue,
    // shadowColor: null,
    // shadowOffset: null,
    // shadowOpacity: null,
    // shadowRadius: null,
  };
  return style;
};


export default class App extends Component {


  render() {
    return <Router {...this.state} scenes={scenes} {...routerStyles} getSceneStyle={getSceneStyle} />
  }

  renderr() {
    return <View><Text>dude</Text></View>
  }
}
