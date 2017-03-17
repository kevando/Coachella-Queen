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
  touchable: {
    marginTop: -7,
    paddingVertical:10,
    paddingHorizontal:20,
    // borderColor:'yellow',borderWidth:1,
    // backgroundColor: 'purple'
  },
  calendar: {
    // backgroundColor: 'red',
    fontSize: 28
  },
});
