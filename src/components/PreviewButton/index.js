import React from 'react';
import { View, Text } from 'react-native';
// import moment from 'moment';

import Routes from '../../config/routes';
import styles from './styles';

const PreviewButton = (props) => {

  const { navigator } = props;

  return (

      <Text onPress={()=>navigator.push(Routes.getHelloRoute())} >Preview</Text>

  );
}


export default PreviewButton;
