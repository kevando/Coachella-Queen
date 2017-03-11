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
  StatusBar
} from 'react-native';
import { Container, Header, Title, Content, Button, Icon } from 'native-base';
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
      <StatusBar barStyle="light-content" />
        <View style={styles.skyContainer} >

          <Animated.View style={[styles.sun,{top: this.state.sunPosition}]} />

          <Animatable.View animation="fadeIn" delay={700} style={styles.textContainer} >
            <Text style={styles.text} >As human beings, we crave togetherness</Text>
            <Text style={styles.text} >Festivals bring us closer together.</Text>
            <Text style={styles.text} >Together we can enourage more togetherness.</Text>
            <Button iconLeft outline light onPress={this.onWeekendPress}>
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
