import React, { Component } from 'react';

import Hello from './Hello';
import Debug from '../Debug';

class HelloContainer extends Component {

  _openDebugModal(){
    this.props.openModal(<Debug />)
  }

  onButtonPress(){
    this.props.onboardStepPassed('hello');
  }

  render() {

    return (
      <Hello
        onButtonPress={this.onButtonPress.bind(this)}
        openDebugModal={this._openDebugModal.bind(this)}
        {...this.props}
      />
    );
  }

}

export default HelloContainer;
