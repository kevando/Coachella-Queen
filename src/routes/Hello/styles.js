import { StyleSheet, Dimensions } from 'react-native';
import { colors, SUN_RADIUS } from '../../config/styles';

const window = Dimensions.get('window');
const BUTTON_WIDTH = 250;
const MARGIN_HORIZONTAL = (window.width - BUTTON_WIDTH) / 2;

export default styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'transparent',
    marginTop: 5,
    // marginBottom: 165,
  },
  skyContainer: {
    flex: 5,
    backgroundColor: colors.blue,
  },
  grassContainer: {
    height: 49,
    borderColor: colors.green,
    borderTopWidth:5,
  },
  sun: {
    position: 'absolute',
    right: 40,
    top: 50,
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
    backgroundColor: 'transparent',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'left',
    fontWeight: '300',
    lineHeight:20,
    marginTop:15,
    backgroundColor: 'transparent',
  },
  button: {
    marginTop:30,width: 150, textAlign: 'center',borderColor:'#fff',color:'#fff',borderWidth:1,paddingVertical: 10,
    backgroundColor: 'transparent',
  }



});
