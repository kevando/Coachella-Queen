import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    marginVertical: 0,
    marginHorizontal: 0,
    paddingVertical:10,
    paddingHorizontal:10,
    borderColor: '#aaa',
    borderWidth: 1,
    height:70,
  },
  band: {
    fontSize: 20,
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
