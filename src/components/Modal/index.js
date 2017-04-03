import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {Icon} from 'native-base';
import * as Animatable from 'react-native-animatable';

import styles, {iconStyle} from './styles';
// import * as Onboard from '../Onboard';

Animatable.initializeRegistryWithDefinitions({

  zoomIn: {
    1: {
      opacity: 1,
      scale: 1,
    },
    0.5: {
      opacity: 1,
      scale: 1.11,
    },
    0: {
      opacity: 0,
      scale: 0.3,
    },
},
zoomOut: {
  0: {
      opacity: 1,
      scale: 1,
    },
    0.2: {
      scale: 0.9,
    },
    0.5: {
      opacity: 1,
      scale: 1.11,
    },
    0.55: {
      scale: 1.11,
    },
    1: {
      opacity: 0,
      scale: 0.3,
    },

},

});

class Modal extends React.Component {

  _onClose() {
    this._overlay.fadeOut(500)
    this._container.zoomOut(500).then(() => {this.props.onClose()})
  }

  render() {

    return (
      <View style={styles.wrapper}>

        <TouchableOpacity onPress={this._onClose.bind(this)} style={styles.touchableOverlay} activeOpacity={1}>
          <Animatable.View style={styles.overlay} delay={0} duration={200} animation="fadeIn" ref={(ref)=>this._overlay=ref} />
        </TouchableOpacity>

        <Animatable.View style={styles.container} delay={200} duration={500} animation="zoomIn" easing="ease-in" ref={(ref) => this._container = ref}>
          <TouchableOpacity style={styles.closeBar} onPress={this._onClose.bind(this)} activeOpacity={1}>
            <Text style={styles.title}>{this.props.title || 'Modal'}</Text>
            <View style={styles.closeIcon} ><Icon ios='ios-close' android="md-close" {...iconStyle} /></View>
          </TouchableOpacity>
          <View style={styles.content} >
            {this.props.children}
          </View>
        </Animatable.View>

      </View>
    );
  }
}
// {this.props.children}
export default Modal;
