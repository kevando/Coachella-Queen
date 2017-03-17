import { AppRegistry } from 'react-native';
import App from './src';

console.ignoredYellowBox = ['Remote debugger is in a background tab which may cause apps to perform slowly. Fix this by foregrounding the tab (or opening it in a separate window).'];

AppRegistry.registerComponent('CoachellaQueen', () => App);

// ================================================================
// Attempt to get screenshot detect working
// ================================================================

// import React, { Component } from 'react';
// import { AppRegistry, Text, View, NativeEventEmitter } from 'react-native';
//
// var RNScreenshotDetector = require('react-native-screenshot-detector');
//
// class HelloWorldApp extends Component {
//
//   componentDidMount() {
//     console.log('=============== RNScreenshotDetector =================');
//
//     // RNScreenshotDetector
//
//     var emitter = RNScreenshotDetector.subscribe(function(){
//       // alert('screenshot taken!')
//       console.log('SUBSCRIBE');
//     });
//
//     // console.log('emitter',emitter)
//
//     // const eventEmitter = new NativeEventEmitter(RNScreenshotDetector);
//     emitter.addListener(RNScreenshotDetector.SCREENSHOT_EVENT, this.someCallback, {});
//
//   }
//
//   someCallback() {
//     console.log('some callback')
//   }
//
//   render() {
//     return (
//       <View style={{paddingTop:100}} >
//         <Text>Hello world!</Text>
//         <Text>dude</Text>
//         <Text>{RNScreenshotDetector.SCREENSHOT_EVENT}</Text>
//         <Text>duuuuuuuuuude</Text>
//       </View>
//     );
//   }
// }
//
// AppRegistry.registerComponent('CoachellaQueen', () => HelloWorldApp);
