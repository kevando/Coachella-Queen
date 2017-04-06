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
      name: null,
      details: null,
    }
  }
  componentDidUpdate(){
    if(this.state.details != null){
      // alert('details saved!')
      // this.props.setEmergencyDetails(this.state.details);
    }
  }

  _onAddInfoPress() {

    AlertIOS.prompt(
      'Emergency Contact',
      'In case you lose your phone, this will show on your lockscreen',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'Save', onPress: details => this.setState({details}) },
      ],
    );

  }



  render() {

    return (

        <View style={styles.container}>

          <TouchableOpacity onPress={this._onAddInfoPress.bind(this)}>
            { this.state.details ?
              <Text style={styles.buttonText}>{this.state.details}</Text>
              :
              <Text style={styles.buttonText}>Add Emergency Contact Information</Text>
            }

          </TouchableOpacity>
        </View>
    );

  }

}
export default ContactInfo;
