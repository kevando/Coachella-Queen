
import React, {Component} from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView, Animated, StatusBar, TouchableOpacity } from 'react-native';

import Queen from './Queen';
import * as Onboard from '../../components/Onboard';
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
      initializeAppData(); // Set some app and user variables
    }
  }

  componentWillReceiveProps(nextProps){
    // why is this here?
    // if(nextProps.app.initialized == false)
      // this.props.refreshSchedule();

    if(nextProps.app.weekend){
      // alert('weekend set')

    }

  }
  componentDidUpdate(){
    if(this.state.activePage == 1 && this.props.app.onboarding.welcome.show) {
      this.props.onboardStepPassed('welcome');
      this._openModal(<Onboard.Hello />, 'Welcome');
    }
  }

  _openModal(modalComponent, modalTitle = 'Default Title') {
    this.setState({showModal: true, modalComponent, modalTitle})
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
        openModal={this._openModal.bind(this)}
        {...this.state}
        {...this.props}
      />

    );
  }

}

export default QueenContainer;
