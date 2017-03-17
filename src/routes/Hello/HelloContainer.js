import React, { Component } from 'react';
var Analytics = require('react-native-firebase-analytics');

import Hello from './Hello';
import Routes from '../../config/routes';

class HelloContainer extends Component {

  componentDidMount() {
    // Load schedule data from firebase
    this.props.refreshSchedule();
    // Set app data like deviceID

    // Log our first event!!!
    Analytics.logEvent('app_loaded');
  }

  onButtonPress(){
    this.props.onboardStepPassed('hello');
  }

  render() {

    const { navigator } = this.props;

    return (
      <Hello
        onButtonPress={this.onButtonPress.bind(this)}
        {...this.props}
      />
    );
  }

}

export default HelloContainer;
