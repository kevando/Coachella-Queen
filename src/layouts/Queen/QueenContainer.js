
import React, {Component} from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView, Animated, StatusBar, TouchableOpacity, AlertIOS } from 'react-native';
import * as ScreenshotDetector from 'react-native-screenshot-detector';
import FCM, {FCMEvent, RemoteNotificationResult, WillPresentNotificationResult, NotificationType} from 'react-native-fcm';

import Queen from './Queen';
import * as Onboard from '../../components/Onboard';
import {width} from '../../config/styles'


class QueenContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      openModal: this._openModal.bind(this),
      offSet: new Animated.Value(0),
      sunOffSet: new Animated.Value(0),
      activePage: 0,
      showPagination: true,
    }
  }

  componentDidMount() {
    const { app, refreshSchedule, initializeAppData } = this.props;

    if(!app.initialized) {
      refreshSchedule(); // Load firebase data
      initializeAppData(); // Set some app and user variables
    }
  }
  componentWillMount() {

    // Subscribe callback to screenshots:
    this.eventEmitter = ScreenshotDetector.subscribe(() => {

      if(this.props.app.onboarding.permissions.show) {
        this.props.onboardStepPassed('permissions');
        // const openPerms = this._openPermissionSettings.bind(this
        AlertIOS.alert(
          'Schedule Saved!',
          'Set this photo as your lock screen or enable notifcations to receive a reminder when the show starts',
          [
            {text: 'Enable Notifications', onPress: () => this._openPermissionSettings(), style: 'cancel'},
            {text: 'Okay', onPress: () => console.log('Install Pressed')},
          ],
        );
      }
    });
  }

  componentWillUnmount() {
    ScreenshotDetector.unsubscribe(this.eventEmitter);
  }

  componentDidUpdate(){
    if(this.state.activePage == 1 && this.props.app.onboarding.welcome.show) {
      this.props.onboardStepPassed('welcome');
      this._openModal(<Onboard.Hello />, 'Welcome');
    }
  }

  _openPermissionSettings() {
    FCM.requestPermissions(); // for iOS
    FCM.getFCMToken().then(token => {
        console.log(token)
        // store fcm token in your server
    });
  }

  _openModal(modalComponent, modalTitle = 'Default Title') {
    this.setState({showModal: true, modalComponent, modalTitle})
  }

  _handleScroll = (e) => {
    const offset = -1 * e.nativeEvent.contentOffset.x / 4;
    Animated.timing(this.state.offSet, {
      toValue: offset,
    }).start();





    this.setState({activePage:e.nativeEvent.contentOffset.x/width})

  }

  render() {
    return (

      <Queen
        updateState={this.setState.bind(this)}
        handleScroll={this._handleScroll.bind(this)}
        openModal={this._openModal.bind(this)}
        {...this.state}
        {...this.props}
      />

    );
  }

}

export default QueenContainer;
