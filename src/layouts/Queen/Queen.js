
import React, {Component} from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView, Animated, StatusBar, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';
import { Hello, Dashboard, Debug } from '../../routes';

import Modal from '../../components/Modal';

const grassGradient = {
  colors: ['#4f7b2b', '#70881b', '#366f31'],
  locations: [0.2,0.3,0.5],
}


const skyGradient = {
  // colors: ['#7dcdce', '#6093c2', '#f6b4cf'],
  colors: ['#87CFD4', '#DDB9D5', '#103F56'],
  start: {x: 0.1, y: 0.1},
  end: {x: 0.7, y: 0.8},
  locations: [0.1,0.7,1.1],
}


class Queen extends Component {

  render() {
    const { showModal, modalComponent, updateState, handleScroll, offSet } = this.props;

    const bgStyles = [styles.container, {
      transform: [
        { translateX: offSet },
      ],
    }];
    return (
      <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="blue" barStyle="light-content" />

      <Animated.View style={bgStyles} >
        <LinearGradient {...skyGradient} style={styles.skyContainer} >
              <View style={styles.sun} />
          <View style={styles.mountains} >
            <View style={styles.trapezoid} />
            <View style={styles.triangleLeft} />
            <View style={styles.triangleRight} />
          </View>
        </LinearGradient>
        <LinearGradient {...grassGradient} style={styles.grassContainer} />
      </Animated.View>

      <ScrollView horizontal={true} pagingEnabled={true} style={styles.scrollView} onScroll={handleScroll} scrollEventThrottle={1000}>

        <View style={styles.page}><Hello {...this.props} /></View>

        {this.props.app.initialized &&
          <View style={styles.page}><Dashboard day="Friday" /></View>
        }

        {this.props.app.initialized &&
          <View style={styles.page}><Dashboard day="Saturday" /></View>
        }

        {this.props.app.initialized &&
          <View style={styles.page}><Dashboard day="Sunday" /></View>
        }




        </ScrollView>

        {showModal && <Modal onClose={() => updateState({showModal: false})}>{modalComponent}</Modal>}

      </View>
    );
  }
}


export default Queen;
