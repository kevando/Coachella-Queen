import React from 'react';
import { View, Text, TouchableOpacity, AlertIOS } from 'react-native';
// import moment from 'moment';
// import Emoji from 'react-native-emoji';
// import * as Animatable from 'react-native-animatable';

import styles from './styles';
// import { EMOJIS } from '../../config/styles';

const OPTIONS_WIDTH = 130;

class ContactInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      details: this.props.emergencyDetails,
    }
  }


  _onAddInfoPress() {
    AlertIOS.prompt(
      'What is your name?',
      'In case you lose your phone, this will show on your lockscreen',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'Next', onPress: name => this._onNextPress(name) },
      ],
    );
  }
  _onNextPress(name) {
    this.setState({name});
    AlertIOS.prompt(
      'How should you be reached??',
      'Add your email or a friend\'s phone number.',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'Save', onPress: details => this._onSavePress(details) },
      ],
    );
  }

  _onSavePress(details) {
    this.setState({details});
    this.props.setEmergencyDetails(this.state.name,details);
  }



  render() {
    const { name, details } = this.state;

    return (

        <View style={styles.container}>

          <TouchableOpacity onPress={this._onAddInfoPress.bind(this)}>
            { details ?
              <Text style={styles.buttonText}>{name}: {details}</Text>
              :
              <Text style={styles.buttonText}>Add Emergency Contact Information</Text>
            }

          </TouchableOpacity>
        </View>
    );

  }

}
export default ContactInfo;
