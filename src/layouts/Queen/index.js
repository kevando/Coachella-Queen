
import React, {Component} from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView, Animated, StatusBar, TouchableOpacity } from 'react-native';
var Analytics = require('react-native-firebase-analytics');

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AppActions from '../../reducers/app/actions';
import * as EventsActions from '../../reducers/events/actions';

const window = Dimensions.get('window');

import ExNavigator from '@exponent/react-native-navigator';
import TabNavigator from 'react-native-tab-navigator';
import LinearGradient from 'react-native-linear-gradient';

import Routes from '../../config/routes';
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

  constructor(props) {
    super(props);
    this.offSet = new Animated.Value(0);
    this.state = { showModal: false }
  }

  componentDidMount() {
    // Load schedule data from firebase
    this.props.refreshSchedule();
    // Set app data like deviceID

    // Log our first event!!!
    Analytics.logEvent('app_loaded');
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.app.initialized == false)
      this.props.refreshSchedule();
  }

  handleScroll = (e) => {
    const offset = -1 * e.nativeEvent.contentOffset.x / 2;
    Animated.timing(this.offSet, {
      toValue: offset,
    }).start();
  }


  render() {
    const bgStyles = [styles.container, {
      transform: [
        { translateX: this.offSet },
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

      <ScrollView horizontal={true} pagingEnabled={true} style={styles.scrollView} onScroll={this.handleScroll} scrollEventThrottle={1000}>

        <View style={styles.page}><Hello /><Text onPress={() => this.setState({showModal: true})}>debug</Text></View>

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
        {this.state.showModal && <Modal onClose={() => this.setState({showModal: false})}><Debug /></Modal>}

      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    app: state.app,
  };
};

export default connect(mapStateToProps, { ...AppActions, ...EventsActions })(Queen);


// export default Queen;
