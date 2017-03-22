
import React, {Component} from 'react';
import { Text, View, StyleSheet, ScrollView, Animated, StatusBar, TouchableOpacity } from 'react-native';


import styles from './styles';
import { Hello, Dashboard, Debug } from '../../routes';

import Modal from '../../components/Modal';
import Landscape from './Landscape';

class Queen extends Component {

  render() {
    const { showModal, modalComponent, updateState, handleScroll, offSet, sunOffSet } = this.props;

    const Slides = [
      <Hello key="0" {...this.props} />,
      // <Hello key="1" {...this.props} />,
      // <Hello key="2" {...this.props} />,
      // <Hello key="3" {...this.props} />,
      <Dashboard day="Friday" key="1" />,
      <Dashboard day="Saturday" key="2"/>,
      <Dashboard day="Sunday" key="3"/>,
    ]

    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />

        <Landscape offSet={offSet} sunOffSet={sunOffSet} slides={Slides.length} />

        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} pagingEnabled={true} style={styles.scrollView} onScroll={handleScroll} scrollEventThrottle={1000}>
          {
            _.map(Slides,function(Component){
              return Component;
            })
          }
        </ScrollView>

        {showModal && <Modal onClose={() => updateState({showModal: false})}>{modalComponent}</Modal>}

      </View>
    );
  }
}


export default Queen;
