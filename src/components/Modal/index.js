import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {Icon} from 'native-base';
import * as Animatable from 'react-native-animatable';

import styles, {iconStyle} from './styles';

class Modal extends React.Component {

  render() {

    return (
      <Animatable.View style={styles.container} animation="fadeIn" >
        <TouchableOpacity style={styles.closeBar} onPress={this.props.onClose}>
          <View style={styles.closeIcon} ><Icon ios='ios-close' android="md-pizza" {...iconStyle} /></View>
        </TouchableOpacity>
        {this.props.children}
      </Animatable.View>
    );
  }
}

export default Modal;
