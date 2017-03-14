import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
    paddingTop:0
  },
  exportText: {
    color: colors.white,
    fontSize: 30,

    textAlign: 'right',
    marginRight: 25,
  },
  viewContainer: {
    paddingTop: 150, // space for time
    flex: 1,
    backgroundColor: colors.blue
  },
  textContainer: {
    // borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,

  },

  text: {
    color: colors.white,
    lineHeight: 30,
    fontSize: 16,
    fontFamily: 'Courier'
  }
});
