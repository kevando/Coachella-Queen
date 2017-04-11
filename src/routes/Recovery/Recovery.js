import React, { Component } from 'react';
import{
  Text,
  View,
  TouchableOpacity,
  LayoutAnimation,
  Animated,
  Dimensions,
  Easing,
} from 'react-native';
// import * as Animatable from 'react-native-animatable';

import styles from './styles';

class Recovery extends Component {


  render(){
    const { app, recoveryMode } = this.props;

    return (
      <View  style={styles.container}>



          { recoveryMode &&
            <View style={styles.textContainer} >
            <Text style={styles.titleQueen} >RECOVERY</Text>
            <Text style={styles.text}>A little help for withdrawl</Text>
            </View>
          }


      </View>
    );

  }


}


export default Recovery;
