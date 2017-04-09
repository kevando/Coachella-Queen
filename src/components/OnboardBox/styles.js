import { StyleSheet } from 'react-native';
import { colors, width } from '../../config/styles';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    marginTop: 70,
    borderColor:'rgba(255,255,255,0.6)',
    borderWidth: 1,
    marginHorizontal: 20,
    height: 100,
  },
  text: {
    color: colors.white,
    backgroundColor: 'transparent',
    padding: 5,
    marginTop: 0,
    marginRight: 30,
  },

  closeIcon: {
    position: 'absolute',
    right: 10,
    top: 0,
  },
  });
  export const iconStyle = {
    style: {
      backgroundColor: 'transparent',
      fontSize: 30,
      textAlign:'center',
      color: '#fff',

    }
  }
