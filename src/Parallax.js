//
// import Exponent, {
//  Components,
// } from 'exponent';
// import {
//  registerComponent,
// } from 'react-native-playground';
import React from 'react';
import {
  Dimensions,
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Images = [
  'https://unsplash.it/400/700/?random',
  'https://unsplash.it/401/700/?random',
  'https://unsplash.it/402/700/?random',
];

const Captions = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc enim urna, sagittis ut nisl sed, blandit vestibulum tellus. Sed scelerisque eros sed felis efficitur, in finibus mi rutrum.',
  'Donec congue dictum eros, eget sodales eros suscipit ut. Sed mauris augue, vulputate quis odio et, iaculis sodales justo.',
  'Nam commodo, velit eget ultricies porttitor, justo neque consequat justo, id tempor est augue eget mi. Nullam dictum lacus lacus, quis imperdiet ex congue non.',
];

function arrayOfLength(n) {
  return Array.from(Array(n).keys())
}

const ImageWidth = Dimensions.get('window').width;
const RenderAhead = 1;

export default class App extends React.Component {

  state = {
    scrollX: new Animated.Value(0),
    currentPage: 0,
    lastRenderedImage: RenderAhead,
  }

  render() {
    return (
      <View style={[StyleSheet.absoluteFill, {backgroundColor: '#000'}]}>
        <View style={styles.statusBarUnderlay} />
        <Animated.ScrollView
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          scrollEventThrottle={16}
          style={{flex: 1}}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: this.state.scrollX } } }],
            { useNativeDriver: true }
          )}
          horizontal>
          {Images.map(this._renderImage)}
          {arrayOfLength(Images.length + 1).map(this._renderSeparator)}
        </Animated.ScrollView>
      </View>
    );
  }

  _renderImage = (imageUrii, i) => {
    var imageUri = 'https://unsplash.it/400/700';
    let inputRange = [i - 1 * ImageWidth, i * ImageWidth, (i + 1) * ImageWidth];
    let translateX;

    if (i == 0) {
      translateX = this.state.scrollX.interpolate({
        inputRange,
        outputRange: [0, 0, 100],
      });
    } else if (i === Images.length - 1) {
      translateX = this.state.scrollX.interpolate({
        inputRange,
        outputRange: [-400, 0, 0],
      });
    } else {
      translateX = this.state.scrollX.interpolate({
        inputRange,
        outputRange: [-450, 0, 150],
      });
    }

    return (
      <View
        key={`image-${i}`}
        style={styles.image}>
        <Animated.View style={[styles.image, {overflow: 'hidden'}]}>
            <Animated.Image
              source={{uri: imageUri}}
              style={[styles.image, {transform: [{translateX}]}]}
            />
        </Animated.View>

        <View style={styles.caption}>
          <Text style={styles.captionText}>{Captions[i]}</Text>
        </View>
      </View>
    );
  }

  _renderSeparator = (_, i) => {
    return (
      <View
        key={`separator-${i}`}
        style={[styles.separator, {left: (i - 1) * Dimensions.get('window').width - 2.5}]} />
    );
  }
}

const styles = StyleSheet.create({
  separator: {
    backgroundColor: '#000',
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 0,
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 25,
  },
  statusBarUnderlay: {
    height: 25,
    backgroundColor: '#000',
  },
  caption: {
    position: 'absolute',
    bottom: 250,
    left: 25,
    right: 0,
    height: 150,
    padding: 15,
    backgroundColor: '#fff',
    width: Dimensions.get('window').width-50,
  },
  captionText: {
    color: '#888',
  },
});

// registerComponent(App);
