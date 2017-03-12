import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    marginVertical: 3,
    marginHorizontal: 20,
    padding:20,
    borderColor: '#aaa',
    borderWidth: 1,
  },
  band: {
    fontSize: 20,
  },
  stage: {
    color: '#999'
  },
  time: {
    textAlign: 'right',
    marginTop: -40,
    backgroundColor: 'transparent',
    fontSize: 30
  }
});
