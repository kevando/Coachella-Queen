import React, { Component } from 'react';
var Mailer = require('NativeModules').RNMail;

import Debug from './Debug';

class DebugContainer extends Component {

  handleHelp() {
    Mailer.mail({
      subject: 'Feedback',
      recipients: ['feedback@chaz.co'],
      body: '',
      isHTML: true, // iOS only, exclude if false
    }, (error, event) => {
        if(error) {
          alert('Could not send mail. Please send a mail to feedback@chaz.co');
        }
    });
  }

  render() {

    return (
      <Debug
        onPurgePress={this.props.purgeData}
        {...this.props}
      />
    );
  }
}

export default DebugContainer;
