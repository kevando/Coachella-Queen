import { StyleSheet, Dimensions } from 'react-native';
import { colors, SUN_RADIUS } from '../../config/styles';

const window = Dimensions.get('window');
const BUTTON_WIDTH = 250;
const MARGIN_HORIZONTAL = (window.width - BUTTON_WIDTH) / 2;

export default styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  skyContainer: {
    flex: 4,
    backgroundColor: colors.blue,
  },
  grassContainer: {
    height: 49,
    backgroundColor: colors.green,
  },
  sun: {
    position: 'absolute',
    // top: 20,
    right: 20,
    width: 100,
    height: 100,
    borderRadius: SUN_RADIUS/2,
    backgroundColor: colors.yellow,
    zIndex:2
  },
  textContainer: {
    flex: 1,
    // backgroundColor: 'orange',
    paddingTop: 170,
    paddingLeft: 20,
  },
  //
  // title: {
  //   color: '#fff',
  //   fontSize: 90,
  //   textAlign: 'center',
  //   paddingTop:80,
  //   paddingBottom: 0,
  //   fontWeight: '600',
  //   letterSpacing:4
  // },
  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'left',
    fontWeight: '300',
    lineHeight:37,
    marginTop:15,
  },

});
