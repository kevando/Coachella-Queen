import React from 'react';
import { Text, View, StyleSheet, ScrollView, Animated, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

const grassGradient = {
  colors: ['#4f7b2b', '#70881b', '#366f31'],
  locations: [0.2,0.3,0.5],
}

const skyGradient = {
  colors: ['#87CFD4', '#DDB9D5'],
  start: {x: 0.6, y: 0.0},
  end: {x: 1.0, y: 1.0},
  locations: [0.1,0.6],
}


const Landscape = (props) => {

  const { offSet } = props;

  const bgStyles = [styles.container, {
    transform: [
      { translateX: offSet },
    ],
  }];


  return (
    <Animated.View style={bgStyles} >
      <LinearGradient {...skyGradient} style={styles.skyContainer} >

        <View style={styles.mountains} >
          <View style={styles.trapezoid} />
          <View style={styles.triangleLeft} />
          <View style={styles.triangleRight} />
          <View style={styles.triangleLeftLeft} />
        </View>
      </LinearGradient>
      <LinearGradient {...grassGradient} style={styles.grassContainer} />
    </Animated.View>
  );

}

export default Landscape;
