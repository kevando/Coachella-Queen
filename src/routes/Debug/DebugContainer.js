import React, { Component } from 'react';
var Mailer = require('NativeModules').RNMail;

import Debug from './Debug';

class DebugContainer extends Component {

  _handleHelp() {
    Mailer.mail({
      subject: 'Coachella Queen Feedback',
      recipients: ['khabich@gmail.com'],
      body: '',
      isHTML: true, // iOS only, exclude if false
    }, (error, event) => {
        if(error) {
          alert('Could not send mail. Please send a mail to khabich@gmail.com');
        }
    });
  }

  render() {

    return (
      <Debug
        onPurgePress={this.props.purgeData}
        onSendFeedbackPress={this._handleHelp.bind(this)}
        {...this.props}
      />
    );
  }
}

export default DebugContainer;
