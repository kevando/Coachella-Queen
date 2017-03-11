import React, { Component } from 'react';
import{
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  LayoutAnimation,
  Animated,
  Dimensions,
  Easing,
} from 'react-native';import { Container, Header, Title, Content, Button } from 'native-base';
import * as Animatable from 'react-native-animatable';
import { Actions } from 'react-native-router-flux';

import { colors } from '../config/styles';

const window = Dimensions.get('window')

export default class Welcome extends Component {

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
    {toValue: 20, delay: 300, duration: 6000}  // Configuration
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

          <Animatable.View animation="fadeIn" delay={7000} style={styles.textContainer} >
            <Text style={styles.text} >As human beings, we crave togetherness</Text>
            <Text style={styles.text} >Festivals bring us closer together.</Text>
            <Text style={styles.text} >Together we can enourage more togetherness.</Text>
          </Animatable.View>
        </View>

        <View style={styles.grassContainer} >
        </View>
      </View>
    );
    }
}

const SUN_RADIUS = 100; //@todo change this based on screen size

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  skyContainer: {
    flex: 4,
    backgroundColor: colors.blue,
  },
  grassContainer: {
    // flex: 1,
    height: 49,
    backgroundColor: colors.green,
  },

  sun: {
    position: 'absolute',
    // top: 20,
    right: 20,
    width: 100,
    height: 100,
    borderRadius: SUN_RADIUS/2,
    backgroundColor: colors.yellow,
    zIndex:2
},

  textContainer: {
    flex: 1,
    // backgroundColor: 'orange',
    paddingTop: 170,
    paddingLeft: 20,
  },
  text: {
    color: colors.white,
    fontSize: 15,
    marginBottom: 30,
  }

});
