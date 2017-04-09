import React from 'react';
import { View, Text, TouchableOpacity, AlertIOS } from 'react-native';
// import moment from 'moment';
// import Emoji from 'react-native-emoji';
import { Icon } from 'native-base';
import * as Animatable from 'react-native-animatable';

import styles, { iconStyle } from './styles';
// import { EMOJIS } from '../../config/styles';


class ContactInfo extends React.Component {

  constructor(props) {
    super(props);
  }

  _onClosePress() {
    this.refs.content.fadeOut(800);
    if(this.props.app.emergencyDetails && this.props.app.onboarding.screenshot.show){
      // this should mean that i need to clear away the dialog
      this.props.onboardStepPassed('screenshot');
    }
  }


  render() {
    const { app, onboardStepPassed } = this.props;

    if(app.emergencyDetails && !this.props.app.onboarding.screenshot.show)
      return <View style={[styles.container,{borderWidth:0}]} />

    return (
      <TouchableOpacity onPress={this._onClosePress.bind(this)} activeOpacity={1} >
        <Animatable.View style={styles.container} ref="content">
        <View style={styles.closeIcon} ><Icon ios='ios-close' android="md-close" {...iconStyle} /></View>
          {
            !app.emergencyDetails ?
              <Text style={styles.text}>Add your emergency contact info</Text>
              :
              <View>
              <Text style={styles.text}>Take a screenshot.</Text>
              <Text style={styles.text}>Then set it as your lock screen.</Text>
              <Text style={styles.text}>Tap anywhere to return to the full list.</Text>
              </View>
          }

        </Animatable.View>
        </TouchableOpacity>
    );

  }

}
export default ContactInfo;
