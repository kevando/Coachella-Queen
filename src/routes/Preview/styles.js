import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
    paddingTop:200
  },
  textContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,

  },
  title: {
    color: colors.white,
    fontSize: 30,
  },
  text: {
    color: colors.white,
    lineHeight: 30,
    fontSize: 20,
    // fontFamily: 'Baskerville'
  }
});
