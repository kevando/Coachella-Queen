import { StyleSheet } from 'react-native';
import { colors, width, height } from '../../config/styles';

const TOTAL_WIDTH = width * 2;
const MOUNTAIN_PEAK = 70;

export default styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: TOTAL_WIDTH,
    height,
    backgroundColor: 'red',
    borderWidth: 0,
    borderColor: 'yellow',
  },
  scrollView: {
    flex: 1,
    // backgroundColor:'blue',
  },
  skyContainer: {
    flex: 5,
    backgroundColor: colors.blue,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',

  },
  grassContainer: {
    height: 49,
    borderColor: colors.green,
    borderTopWidth:5,
  },
  mountains: {
    borderWidth: 0,
    borderColor: 'yellow',
    position: 'absolute',
    bottom: 0,
    width: TOTAL_WIDTH,
    height: MOUNTAIN_PEAK,
  },
  triangleLeft: {
    position: 'absolute',
    bottom: 0,
    left: width-100,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 180,
    borderRightWidth: 50,
    borderBottomWidth: MOUNTAIN_PEAK-40,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#C9775E'
    // borderBottomColor: 'red',
    // zIndex: 999,
  },
  trapezoid: {
    position: 'absolute',
    bottom: 0,
    width: width-100,
    left: width+20,
    height: 0,
    borderBottomWidth: MOUNTAIN_PEAK-20,
    borderBottomColor: '#C9775E',
    borderLeftWidth: 50,
    borderLeftColor: 'transparent',
    borderRightWidth: 150,
    borderRightColor: 'transparent',
    borderStyle: 'solid'
  },
  triangleRight: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 70,
    borderRightWidth: 70,
    borderBottomWidth: MOUNTAIN_PEAK-40,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#C9775E'
  },
  triangleLeftLeft: {
    position: 'absolute',
    left: width-200,
    bottom: 0,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 70,
    borderRightWidth: 70,
    borderBottomWidth: MOUNTAIN_PEAK-40,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#C9775E'
  },

  footer: {
    height: 50,
    backgroundColor:'transparent',
    // flex:1,
    flexDirection: 'row',
    justifyContent: 'center', //h
    alignItems: 'center', //v
  },
  pageCircle: {
    height: 10,
    width:10,
    borderRadius: 10,
    backgroundColor: 'rgba(222,222,222,0.6)',
    marginHorizontal: 7,
  },
});

export const getActivePage = (activePage, page) => {
  return activePage == page && {backgroundColor: 'rgba(222,222,222,0.9)'}
}
