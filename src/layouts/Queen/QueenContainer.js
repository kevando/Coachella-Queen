
import React, {Component} from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView, Animated, StatusBar, TouchableOpacity } from 'react-native';
var Analytics = require('react-native-firebase-analytics');

import Queen from './Queen';


class QueenContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      openModal: this._openModal.bind(this),
      offSet: new Animated.Value(0),
    }
  }

  componentDidMount() {
    const { app, refreshSchedule, initializeAppData } = this.props;

    if(!app.initialized) {
      refreshSchedule(); // Load firebase data
      initializeAppData();
    }

    // Log our first event!!!
    // Analytics.logEvent('app_loaded');
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.app.initialized == false)
      this.props.refreshSchedule();
  }

  _openModal(modalComponent) {
    this.setState({showModal: true, modalComponent})
  }

  _handleScroll = (e) => {
    const offset = -1 * e.nativeEvent.contentOffset.x / 2;
    Animated.timing(this.state.offSet, {
      toValue: offset,
    }).start();
  }

  render() {
    return (
      <Queen
        updateState={this.setState.bind(this)}
        handleScroll={this._handleScroll.bind(this)}
        {...this.state}
        {...this.props}
      />
    );
  }

}

export default QueenContainer;
