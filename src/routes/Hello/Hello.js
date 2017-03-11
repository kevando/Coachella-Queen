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
import { Container, Header, Title, Content, Button, Icon } from 'native-base';
import * as Animatable from 'react-native-animatable';

import styles from './styles';

export default class Hello extends Component {

  state = {
    sunPosition: new Animated.Value(window.height), // init opacity 0
  }

  // ---------------------------------------------
  // functions
  // ---------------------------------------------

  componentDidMount() {
    // this.riseSun(); // animate sun
  }



  riseSun() {
    Animated.timing(  // Uses easing functions
    this.state.sunPosition,  // The value to drive
    {toValue: 20, delay: 300, duration: 1000}  // Configuration
    ).start();  // Don't forget start!
  }

// ---------------------------------------------
  onWeekendPress(weekend) {
    // Pass weekend var to home
    Actions.home({weekend})
  }



  render() {

    return (
      <View style={styles.container} >

        <View style={styles.skyContainer} >

          <Animated.View style={[styles.sun,{top: this.state.sunPosition}]} />

          <Animatable.View animation="fadeIn" delay={700} style={styles.textContainer} >
            <Text style={styles.text} >As human beings, we crave togetherness</Text>
            <Text style={styles.text} >Festivals bring us closer together.</Text>
            <Text style={styles.text} >Together we can enourage more togetherness.</Text>
            <Text style={styles.text} >{this.props.app.kevin}</Text>
            <Button iconLeft outline light onPress={this.props.onboarded}>
                        <Icon name='home' />
                        <Text>Home</Text>
                    </Button>
          </Animatable.View>
        </View>

        <View style={styles.grassContainer} >
        </View>
      </View>
    );
    }
}

// var blueCode = ((14 * 299) + (158 * 587) + (237 * 114)) / 1000;
//  If it is below 125, use white text. If it is 125 or above, use black text.
