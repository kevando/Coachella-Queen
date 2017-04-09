import React, {Component} from 'react';
import { Text, View, StyleSheet, ScrollView, Animated, StatusBar, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

import styles, { getActivePage, width } from './styles';
import { Hello, Dashboard, Debug } from '../../routes';
import Modal from '../../components/Modal';
import Landscape from './Landscape';

class Queen extends Component {

  render() {
    const { showPagination, activePage, showModal, openModal, modalComponent, modalTitle, updateState, handleScroll, offSet, sunOffSet, app } = this.props;

    const Slides = [
      <Hello key="0" {...this.props} />,
      // <Hello key="1" {...this.props} />,
      // <Hello key="2" {...this.props} />,
      // <Hello key="3" {...this.props} />,
      <Dashboard day="Friday" key="1" openModal={openModal} togglePagination={()=>updateState({showPagination: !showPagination})} />,
      <Dashboard day="Saturday" key="2" openModal={openModal} togglePagination={()=>updateState({showPagination: !showPagination})} />,
      <Dashboard day="Sunday" key="3" openModal={openModal} togglePagination={()=>updateState({showPagination: !showPagination})} />,
    ]

    const scrollViewConfig = {
      // contentOffset: {x: 1000, y: 0},
      showsHorizontalScrollIndicator: false,
      horizontal: true,
      pagingEnabled: true,
      style: styles.scrollView,
      onScroll: handleScroll,
      scrollEventThrottle: 1000,
      scrollEnabled: app.initialized
    }

    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />

        <Landscape offSet={offSet} sunOffSet={sunOffSet} slides={Slides.length} />

        <ScrollView {...scrollViewConfig} >
          {
            _.map(Slides,function(Component){
              return Component;
            })
          }
        </ScrollView>

        { app.initialized && showPagination &&
          <Animatable.View style={styles.footer} animation="zoomIn">
            <View style={[styles.pageCircle,getActivePage(activePage,0)]} />
            <View style={[styles.pageCircle,getActivePage(activePage,1)]} />
            <View style={[styles.pageCircle,getActivePage(activePage,2)]} />
            <View style={[styles.pageCircle,getActivePage(activePage,3)]} />
          </Animatable.View>
        }


        {showModal && <Modal title={modalTitle} onClose={() => updateState({showModal: false})}>{modalComponent}</Modal>}

      </View>
    );
  }
}


export default Queen;
