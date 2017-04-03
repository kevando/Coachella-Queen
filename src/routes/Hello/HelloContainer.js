import React, { Component } from 'react';
import { Animated } from 'react-native';
var Analytics = require('react-native-firebase-analytics');

import Hello from './Hello';
import Debug from '../Debug';
import { height, SUN_RISE_DURATION } from '../../config/styles';

class HelloContainer extends Component {

  state = {
    sunOffSet: new Animated.Value(height+100),
    // sunOffSet: new Animated.Value(50),
    sunOpacity: new Animated.Value(0.4),
  }

  componentDidMount() {
    const { initialized } = this.props.app;
    this._animateSunRise(initialized ? 0 : SUN_RISE_DURATION );
    initialized && this._animateSunFull();
  }

  componentWillReceiveProps(nextProps) {
    if(!this.props.dataLoaded && nextProps.dataLoaded) {
      // Only called when firebase data is first loaded
      this._animateSunFull();
    }
  }

  _animateSunRise(duration) {
    // @todo this animation bugs out when refreshData is called during
    // the sun rise animation. fix this
    Animated.timing(this.state.sunOffSet, {
      toValue: 50, delay: 100, duration
    }).start();
  }

  _animateSunSet() {}

  _animateSunFull() {
    Animated.timing(this.state.sunOpacity, {
      toValue: 1, delay: 0, duration: 1000
    }).start();
  }

  _openDebugModal(){
    this.props.openModal(<Debug />, 'Settings')
    Analytics.logEvent('open_debug');
  }

  onButtonPress(){
    this.props.onboardStepPassed('hello');
  }

  _onWeekendPress(weekend) {
    this.props.setWeekend(weekend);
    this.props.initApp();
    this.props.onboardStepPassed('wiggle'); // this can happen multiple times
  }

  render() {

    return (
      <Hello
        onButtonPress={this.onButtonPress.bind(this)}
        openDebugModal={this._openDebugModal.bind(this)}
        onWeekendPress={this._onWeekendPress.bind(this)}
        {...this.props}
        {...this.state}
      />
    );
  }

}

export default HelloContainer;
