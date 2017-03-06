import { AppRegistry } from 'react-native';
import App from './src';

console.ignoredYellowBox = ['Remote debugger is in a background tab which may cause apps to perform slowly. Fix this by foregrounding the tab (or opening it in a separate window).'];

AppRegistry.registerComponent('CoachellaQueen', () => App);
