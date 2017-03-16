import React, { Component } from 'react';

import Hello from './Hello';
import Routes from '../../config/routes';

class HelloContainer extends Component {

  componentDidMount() {
    // Load schedule data from firebase
    // this might be a problem if internet is slow
    this.props.refreshSchedule();
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
