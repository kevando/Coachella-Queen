import React from 'react';
import{
  Text,
  View,
  TouchableOpacity,
  LayoutAnimation,
  Animated,
  Dimensions,
  Easing,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import styles from './styles';
import { SUN_RISE_DURATION } from '../../config/styles';

Animatable.initializeRegistryWithDefinitions({
  // i dont like this, but it works @todo
  tapperoo: {
    0: {
    translateX: 0,
  },
  0.25: {
    translateX: -15,
  },
  0.4: {
    translateX: 15,
  },
  // 0.3: {
  //   translateX: 2,
  // },
  // 0.4: {
  //   translateX: -2,
  // },
  0.5: {
    translateX: 2,
  },
  0.6: {
    translateX: -1,
  },
  0.7: {
    translateX: 1,
  },
  0.8: {
    translateX: -1,
  },
  0.9: {
    translateX: 1,
  },
  1: {
    translateX: 0,
  },
},

});

const Hello = (props) => {

  const { openDebugModal, sunOffSet, sunOpacity, onWeekendPress, app } = props;

  return (
    <Animatable.View easing="linear" ref={(scrollView) => { this._scrollView = scrollView; }} style={styles.container}>
      <Animated.View style={[styles.sun, {top: sunOffSet, opacity: sunOpacity}]} />
      <Animatable.View style={styles.textContainer} animation="fadeInUp" delay={SUN_RISE_DURATION+1000} duration={500}>
          <Text style={styles.titleFest} >FEST</Text>
          <Text style={styles.titleQueen} >QUEEN</Text>
          <Text style={styles.text}>Music brings us closer together.</Text>
          <Text style={styles.text} onPress={() => this._scrollView.tapperoo(500) }>
            Pick the artists you want to see with your friends, then share your
            list so you can enjoy the music together.
          </Text>

          <Text style={styles.optionsLabel}>I am going to:</Text>

          <TouchableOpacity onPress={()=>onWeekendPress(1)}>
            <Text style={[styles.button, app.weekend == 1 && styles.selected]}>Coachella Weekend 1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>onWeekendPress(2)}>
            <Text style={[styles.button, app.weekend == 2 && styles.selected]}>Coachella Weekend 2</Text>
          </TouchableOpacity>


        </Animatable.View>

        <TouchableOpacity onPress={openDebugModal} style={styles.sunTouch} />

    </Animatable.View>
  );

}


export default Hello;
