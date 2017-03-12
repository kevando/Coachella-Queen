import React, { Component } from 'react';

import Hello from './Hello';
import Routes from '../../config/routes';

class HelloContainer extends Component {
  onPress() {
    alert('asdf')
    this.props.onboard(); //@todo change this function name
    this.props.navigator.push(Routes.getDashboardRoute('Friday'))
  }
  render() {

    const { navigator, onboard } = this.props;

    return (
      <Hello
        onButtonPress={() => this.onPress.bind(this)}
        {...this.props}
      />
    );
  }

}

export default HelloContainer;
