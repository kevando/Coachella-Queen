import React from 'react';
import { View, Text } from 'react-native';
import Emoji from 'react-native-emoji';

import styles from './styles';
import { EMOJIS } from '../../config/styles';

const Options = (props) => {

  return (
    <View style={styles.container}>

    <Text style={styles.text}>
      <Text style={styles.emojiIcon}><Emoji name={EMOJIS.yes} /></Text>
      = Must see artist!
    </Text>

    <Text style={styles.text}>
      <Text style={styles.emojiIcon}><Emoji name={EMOJIS.maybe} /></Text>
      = Maybe
    </Text>

    <Text style={styles.text}>
      <Text style={styles.emojiIcon}><Emoji name={EMOJIS.no} /></Text>
      = Nope
    </Text>
    </View>
  )

}

export default Options;
