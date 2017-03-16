import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
// var dismissKeyboard = require('dismissKeyboard');

import Routes from '../../config/routes';
import styles from './styles';


const Button = ({ text='Back', navigator }) => {

  const onButtonPress = () => {
    // dismissKeyboard();
    if(text=='Debug')
      navigator.push(Routes.getDebugRoute());
    else if(text == 'something else')
      navigator.push(Routes.getHelloRoute());
    else
      navigator.pop()
  }

  return (
    <TouchableOpacity onPress={onButtonPress} >
      <Text style={styles.buttonText}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
