import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection:'row',
    marginVertical: 5,
    marginHorizontal: 0,
    paddingVertical:0,
    // paddingHorizontal:10,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderColor: 'rgba(255,255,255,0.01)',
    borderWidth: 1,
    height: 50,
    overflow: 'hidden',
    borderRadius: 5,
  },
  rowTouchable: {
    flex:1,
    flexDirection:'row',
  },
  left: {
    width: 40,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    // backgroundColor:'yellow',
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  right: {
    width: 0,
    flexDirection: 'row',
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    marginVertical: 0,
    marginHorizontal: 0,
    paddingVertical:5,
    paddingHorizontal:10,
    borderColor: 'rgba(100,100,100,0.1)',
    borderBottomWidth: 1,
  },
  band: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.white,
  },
  stage: {
    color: colors.white,
    fontSize: 12,
    fontWeight: '400',
  },
  time: {
    textAlign: 'right',
    backgroundColor: 'transparent',
    fontSize: 14,
    color: colors.white,
  },
  optionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  optionText: {
    color: colors.white,
    fontSize: 11,
  },
  optionIcon: {
    fontSize: 16,
  },
});
