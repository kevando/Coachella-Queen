import { StyleSheet } from 'react-native';
import { colors, width } from '../../config/styles';

export default styles = StyleSheet.create({
  container: {
    position: 'absolute',
    // flexDirection:'row',
    // marginVertical: 5,
    // marginHorizontal: 0,
    paddingVertical:0,
    // paddingHorizontal:10,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderColor: 'rgba(255,255,255,0.4)',
    borderWidth: 1,
    height: 30,
    width: width-80,
    left: 40,
    top: 30,
    overflow: 'hidden',
    borderRadius: 5,
    justifyContent: 'center',
    zIndex: 999
  },
  buttonText: {
    color: colors.white,
    textAlign: 'center',
  }
  });
