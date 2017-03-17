import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default styles = StyleSheet.create({

  buttonText: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    margin: 0,
    fontSize: 17,
    fontWeight: '200',
    // borderWidth: 1,
    color: colors.white
  },

  // ----------------------------
  // Calendar Button

  touchableCalendar: {
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
