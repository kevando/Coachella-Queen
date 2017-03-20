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
import { Container, Header, Title, Content, Button, Icon } from 'native-base';
import * as Animatable from 'react-native-animatable';

import styles from './styles';
const window = Dimensions.get('window');

const Hello = (props) => {

  const { openDebugModal } = props;

  return (
    <View style={styles.container}>

        <Animatable.View style={styles.textContainer} animation="fadeIn" delay={1000} duration={500}>
          <Text style={styles.title} >Coachella Queen</Text>
          <Text style={styles.text} >1) Tap the bands you want to see</Text>
          <Text style={styles.text} >2) Export your schedule for each day</Text>
          <Text style={styles.text} >3) Set your schedule as your background photo</Text>
          <Text style={styles.text} >4) Be together :)</Text>
          { props.app.initialized &&
            <Animatable.Text style={styles.button} animation="bounceIn" duration={800}  > {'< <<'} Swipe to begin</Animatable.Text>
          }

        </Animatable.View>

        <TouchableOpacity onPress={openDebugModal} style={styles.sunTouch} />

    </View>
  );

}
const Helloo = (props) => {


  return ( <View style={styles.container} /> );

}

export default Hello;

// var blueCode = ((14 * 299) + (158 * 587) + (237 * 114)) / 1000;
//  If it is below 125, use white text. If it is 125 or above, use black text.

// <Text style={styles.text} >As human beings, we crave togetherness</Text>
// <Text style={styles.text} >Festivals bring us closer together.</Text>
// <Text style={styles.text} >Together we can enourage more togetherness.</Text>
