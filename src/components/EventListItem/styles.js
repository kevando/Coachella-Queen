import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    marginVertical: 0,
    marginHorizontal: 0,
    paddingVertical:5,
    paddingHorizontal:10,
    borderColor: 'rgba(100,100,100,0.1)',
    borderBottomWidth: 1,
    height: 50,
  },
  band: {
    fontSize: 16,
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
