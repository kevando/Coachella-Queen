import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default styles = StyleSheet.create({


  // Styling pass to navBar
  navigationBarStyle: {
    backgroundColor: colors.blue
  },
  titleStyle: {
    color: colors.white,
    // fontFamily: 'Baskerville', // doesnt work for some reason
  },

  // Styling pass to tabBar
  tabBarStyle: {
    backgroundColor: colors.green
  },
  titleStyle: {
    color: colors.white,
    fontSize: 20
  },
  selectedTitleStyle: {
    color: colors.white,
    fontWeight: '700',

  }
});
