import { StyleSheet, Dimensions } from 'react-native';
const window = Dimensions.get('window');

// ------------------------------
// Constants

export const width = window.width;
export const height = window.height;

export const SUN_RADIUS = width/4; 
export const SUN_RISE_DURATION = 5000;
// ------------------------------
// Coachella coolors baby

export const colors = {

  orange: '#ff6800',
  blue: '#0e9eed',
  white: '#ffffff',
  yellow: '#ffe60c',
  green: '#245a27',
  navy: '#081130',

  grey: '#bbb'

}
//
//
// // ------------------------------
// // Friend Text
//
// export const friend = {
//   fontSize: 20,
//   // fontFamily: 'Baskerville', // default for now
//   color: colors.black,
//   letterSpacing: 1.1,
//   fontWeight: '400'
// }
//
// // ------------------------------
// // Text
//
// export const text = {
//   fontSize: 20,
//   fontFamily: 'Helvetica', // default for now
//   color: colors.black,
//   letterSpacing: 0.5,
//   fontWeight: '400'
// }
//
//
// // ------------------------------
// // Title Defaults
//
// export const Title = {
//   fontSize: 20,
//   // fontFamily: 'Baskerville', // default for now
//   color: colors.black,
//   letterSpacing: 1.1,
//   fontWeight: '500'
// }
