
import React, {Component} from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView, Animated, StatusBar, TouchableOpacity } from 'react-native';

import Queen from './Queen';
import {width} from '../../config/styles'


class QueenContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      openModal: this._openModal.bind(this),
      offSet: new Animated.Value(0),
      sunOffSet: new Animated.Value(0),
      activePage: 0,
    }
  }

  componentDidMount() {
    const { app, refreshSchedule, initializeAppData } = this.props;

    if(!app.initialized) {
      refreshSchedule(); // Load firebase data
      initializeAppData();
    }

  }

  componentWillReceiveProps(nextProps){
    if(nextProps.app.initialized == false)
      this.props.refreshSchedule();
  }

  _openModal(modalComponent) {
    this.setState({showModal: true, modalComponent})
  }

  _handleScroll = (e) => {
    const offset = -1 * e.nativeEvent.contentOffset.x / 3;
    Animated.timing(this.state.offSet, {
      toValue: offset,
    }).start();


    const sunoffset = -1 * e.nativeEvent.contentOffset.x / 1.5;
    Animated.timing(this.state.sunOffSet, {
      toValue: sunoffset,
    }).start();

    this.setState({activePage:e.nativeEvent.contentOffset.x/width})

  }

  render() {
    return (
      <Queen
        updateState={this.setState.bind(this)}
        handleScroll={this._handleScroll.bind(this)}
        {...this.state}
        {...this.props}
      />
    );
  }

}

export default QueenContainer;
