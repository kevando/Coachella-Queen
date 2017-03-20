import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView, Animated } from 'react-native';

const window = Dimensions.get('window');

export default class App extends Component {
  constructor(props) {
    super(props);

    this.offSet = new Animated.Value(0);
  }

  handleScroll = (e) => {
    const offset = -1 * e.nativeEvent.contentOffset.x / 2;
    Animated.timing(this.offSet, {
      toValue: offset,
    }).start();
  }

  render() {
    const imageStyles = [styles.container, {
      transform: [
        { translateX: this.offSet },
      ],
    }];
    return (
      <View style={{ flex: 1 }}>
      <Animated.View style={imageStyles} source={require('./images/bg1.png')} />
      <ScrollView horizontal={true} pagingEnabled={true} style={styles.scrollView} onScroll={this.handleScroll} scrollEventThrottle={1000}>
          <View style={styles.page}><Text>Screen 1</Text></View>
          <View style={styles.page}><Text>Screen 2</Text></View>
          <View style={styles.page}><Text>Screen 3</Text></View>
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: window.width * 2,
    height: window.height,
    backgroundColor: 'red',
    borderWidth: 25,
    borderColor: 'yellow',
  },
  scrollView: {
    flex: 1,
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: window.width,
    height: window.height,
  }
});
