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
const window = Dimensions.get('window');

export default class Hello extends Component {

  state = {
    sunPosition: new Animated.Value(window.height), // init opacity 0
  }

  // ---------------------------------------------
  // functions
  // ---------------------------------------------

  componentDidMount() {
    this.riseSun(); // animate sun
  }



  riseSun() {
    Animated.timing(  // Uses easing functions
    this.state.sunPosition,  // The value to drive
    {toValue: 30, delay: 300, duration: 4000}  // Configuration
    ).start();  // Don't forget start!
  }


  render() {

    return (
      <View style={styles.container} >

        <View style={styles.skyContainer} >

          <Animated.View style={[styles.sun,{top: this.state.sunPosition}]} />

          <View style={styles.textContainer} >
            <Animatable.Text animation="fadeIn" delay={4000} style={styles.title} >Coachella Queen</Animatable.Text>
            <Animatable.Text animation="fadeIn" delay={5000} style={styles.text} >1) Tap the bands you want to see</Animatable.Text>
            <Animatable.Text animation="fadeIn" delay={5000} style={styles.text} >2) Export your schedule for each day</Animatable.Text>
            <Animatable.Text animation="fadeIn" delay={5000} style={styles.text} >3) Set your schedule as your background photo</Animatable.Text>
            <Animatable.Text animation="fadeIn" delay={5000} style={styles.text} >4) Be together :)</Animatable.Text>
              <Animatable.Text onPress={this.props.onButtonPress} style={{marginTop:30,width: 150, textAlign: 'center',borderColor:'#fff',color:'#fff',borderWidth:1,paddingVertical: 10}} animation="fadeIn" delay={5000}>LETS DO THIS</Animatable.Text>
          </View>
        </View>

        <View style={styles.grassContainer} >
        </View>
      </View>
    );
    }
}

// var blueCode = ((14 * 299) + (158 * 587) + (237 * 114)) / 1000;
//  If it is below 125, use white text. If it is 125 or above, use black text.

// <Text style={styles.text} >As human beings, we crave togetherness</Text>
// <Text style={styles.text} >Festivals bring us closer together.</Text>
// <Text style={styles.text} >Together we can enourage more togetherness.</Text>
