import { StyleSheet, Dimensions } from 'react-native';
import { colors, SUN_RADIUS } from '../../config/styles';

const window = Dimensions.get('window');
const BUTTON_WIDTH = 250;
const MARGIN_HORIZONTAL = (window.width - BUTTON_WIDTH) / 2;

export default styles = StyleSheet.create({

  container: {
    flex: 2,
    backgroundColor: '#F5FCFF',
  },
  skyContainer: {
    flex: 5,
    backgroundColor: colors.blue,
  },
  grassContainer: {
    height: 49,
    backgroundColor: colors.green,
  },
  sun: {
    position: 'absolute',
    right: 40,
    width: 100,
    height: 100,
    borderRadius: SUN_RADIUS/2,
    backgroundColor: colors.yellow,
    zIndex:2
  },
  textContainer: {
    flex: 1,
    paddingTop: 170,
    paddingLeft: 20,
  },
  title: {
    color: '#fff',
    fontSize: 26,
    textAlign: 'left',
    fontWeight: '400',
    lineHeight:37,
    marginTop:15,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'left',
    fontWeight: '300',
    lineHeight:20,
    marginTop:15,
  },

});