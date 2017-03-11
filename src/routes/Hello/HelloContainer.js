import React, { Component } from 'react';

import Hello from './Hello';
import Routes from '../../config/routes';

class HelloContainer extends Component {

  render() {

    const { navigator, onboard } = this.props;

    return (
      <Hello
        onButtonPress={() => onboard}
        {...this.props}
      />
    );
  }

}

export default HelloContainer;
