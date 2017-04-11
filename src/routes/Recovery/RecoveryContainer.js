import React, { Component } from 'react';
import moment from 'moment';

import Recovery from './Recovery';

class RecoveryContainer extends Component {

  state = {
    recoveryMode: moment().isAfter('2017-04-16'),
  }



  render() {

    return (
      <Recovery
        {...this.props}
        {...this.state}
      />
    );
  }

}

export default RecoveryContainer;
