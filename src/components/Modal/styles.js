import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../config/styles';

const window = Dimensions.get('window');

export default styles = StyleSheet.create({
  container: {
    // flex: 1,
    position: 'absolute',
    top: 50,
    left: 10,
    width: window.width-20,
    height: window.height-100,
    backgroundColor: '#fff',
    marginVertical: 0,
    marginHorizontal: 0,
    paddingVertical:5,
    paddingHorizontal:10,
    borderColor: 'rgba(100,100,100,0.9)',
    borderWidth: 1,
  },
  close: {
    fontSize: 13,
    textAlign: 'right',
    color: '#ccc'
  },
  stage: {
    color: '#999'
  },
  time: {
    textAlign: 'right',
    marginTop: -30,
    backgroundColor: 'transparent',
    fontSize: 20,
    color: '#555'
  }
});
