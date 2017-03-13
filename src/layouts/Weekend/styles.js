import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default styles = StyleSheet.create({


  // Styling pass to navBar
  navigationBarStyle: {
    borderBottomColor:'#fff',

    borderBottomWidth:0,
    backgroundColor: colors.blue,

  },
  titleStyle: { // not working for some reason
    fontSize: 45,
    color: colors.white,
    fontFamily: 'Baskerville',
  },

  // Styling pass to tabBar
  tabBarStyle: {
    backgroundColor: colors.green,
    borderTopWidth:1,
    borderColor: '#ccc'
  },
  titleStyle: {
    color: colors.white,
    fontSize: 20,
    paddingBottom: 10,
  },
  selectedTitleStyle: {
    color: colors.white,
    fontWeight: '700',

  }
});
