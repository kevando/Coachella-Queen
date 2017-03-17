import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export const navStyles = {
  flex: 1,
  navigationBarStyle: {
    borderBottomColor:'#fff',
    borderBottomWidth:0,
    backgroundColor: colors.blue,
  },
  titleStyle: {
    fontSize: 22,
    color: colors.white,
    fontFamily: 'Baskerville',
  },
  barButtonTextStyle: {
    color: 'white',
  },
  barButtonIconStyle: {
    tintColor: 'white',
  },
}

export const tabStyles = {
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
};
