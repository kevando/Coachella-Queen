import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: 'transparent',
    marginVertical: 3,
    marginHorizontal: 0,
    paddingVertical:5,
    // paddingHorizontal:10,
    // borderColor: 'rgba(100,100,100,0.1)',
    borderColor: colors.white,
    borderWidth: 1,
    height: 50,
    overflow: 'hidden',
  },
  rowTouchable: {
    flex:1,
    flexDirection:'row',
    // backgroundColor:'#ddd'
  },
  left: {
    // backgroundColor: '#ccc',
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    // backgroundColor:'yellow',
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  right: {
    // backgroundColor: '#ccc',
    width: 90,
    flexDirection: 'row',
    // position: 'absolute',
    right: 0,
    // top: 10,
    justifyContent: 'center',
    alignItems: 'center',
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
    height: 50,
  },
  band: {
    fontSize: 14,
    color: colors.white,
    // fontFamily: 'Monaco',
  },
  stage: {
    color: colors.white,
    fontSize: 14,
  },
  time: {
    textAlign: 'right',
    // marginTop: -30,
    backgroundColor: 'transparent',
    fontSize: 14,
    color: colors.white,
    // paddingV: 15,
  },
  optionContainer: {
    borderColor: 'black',
    // borderWidth: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionText: {
    color: colors.white,
    fontSize: 11,
  },
  optionIcon: {
    fontSize: 16,
  },
});
