import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import moment from 'moment';

import styles from './styles';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   event: this.props.event,
    //   // selected: this.props.event.selected,
    // }
  }


  render() {
    // const { event, onPress } = this.props;
// <View style={[styles.container,{backgroundColor: this.state.selected ? '#ddd' : '#fff',borderColor: this.state.selected ? '#333' : '#ccc'}]}>
    return (

        <View style={styles.container}>
          <Text style={styles.close} onPress={this.props.onClose}>Close</Text>
          {this.props.children}

        </View>

    );

  }

}


export default Modal;
