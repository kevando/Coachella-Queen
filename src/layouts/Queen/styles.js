import { StyleSheet, Dimensions } from 'react-native';
import { colors, width, height } from '../../config/styles';

const window = Dimensions.get('window');


const SUN_RADIUS = 150;
const TOTAL_WIDTH = window.width * 2;
const MOUNTAIN_PEAK = 70;

export default styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: TOTAL_WIDTH,
    height,
    backgroundColor: 'red',
    borderWidth: 0,
    borderColor: 'yellow',
  },
  scrollView: {
    flex: 1,
  },
  skyContainer: {
    flex: 5,
    backgroundColor: colors.blue,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',

  },
  grassContainer: {
    height: 49,
    borderColor: colors.green,
    borderTopWidth:5,
  },
  sun: {
    position: 'absolute',
    left: width-(SUN_RADIUS),
    top: 50,
    width: 100,
    height: 100,
    borderRadius: SUN_RADIUS/2,
    backgroundColor: colors.yellow,
    zIndex:2
  },

  mountains: {
    borderWidth: 0,
    borderColor: 'yellow',
    position: 'absolute',
    bottom: 0,
    width: TOTAL_WIDTH,
    height: MOUNTAIN_PEAK,
  },
  triangleLeft: {
    position: 'absolute',
    bottom: 0,
    left: width-100,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 180,
    borderRightWidth: 50,
    borderBottomWidth: MOUNTAIN_PEAK-40,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#C9775E'
  },
  trapezoid: {
    position: 'absolute',
    bottom: 0,
    width: width-100,
    left: width+20,
    height: 0,
    borderBottomWidth: MOUNTAIN_PEAK-20,
    borderBottomColor: '#C9775E',
    borderLeftWidth: 50,
    borderLeftColor: 'transparent',
    borderRightWidth: 150,
    borderRightColor: 'transparent',
    borderStyle: 'solid'
  },
  triangleRight: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 70,
    borderRightWidth: 70,
    borderBottomWidth: MOUNTAIN_PEAK-40,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#C9775E'
  },
  triangleLeftLeft: {
    position: 'absolute',
    left: width-200,
    bottom: 0,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 70,
    borderRightWidth: 70,
    borderBottomWidth: MOUNTAIN_PEAK-40,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#C9775E'
  },
});
