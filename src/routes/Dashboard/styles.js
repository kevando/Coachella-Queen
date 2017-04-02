import { StyleSheet, Dimensions } from 'react-native';
import { colors, width, height, } from '../../config/styles';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    height,
  },
  contentContainer: {
    position: 'absolute',
    top: 0,
    width,
    height,
  },
  scheduleListContainer: {
    flex:1,
    // backgroundColor: 'blue',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: colors.white,
    backgroundColor: 'transparent',
    marginTop: 22,
    fontFamily: 'Georgia',
  },
  horizontalScheduleContainer: {
    overflow: 'hidden',
    borderColor: 'rgba(255,255,255,0.7)',
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderWidth: 1,
    height: 40,
    marginVertical: 5,
    marginHorizontal: 20,
    flexDirection: 'row',
  },
  horizontalScheduleEvent: {
    marginVertical: 2,
    marginHorizontal: 5,
    height: 20,
    // flex: 1,
    borderColor: '#fff',
    borderWidth: 1,
    // paddingTop: 3,
    justifyContent: 'center',
    paddingHorizontal: 15,
    backgroundColor: 'rgba(14, 158, 237, 0.15)',
    borderColor:'rgba(255,255,255,0.6)',
  },
  horizontalScheduleText: {
    backgroundColor: 'transparent',
    color: '#fff',
    fontSize: 12,
  },
  listContainer: {
    width: width-30,
    marginLeft: 15,
    // backgroundColor: 'yellow',
    // backgroundColor: 'rgba(255,255,255,0.4)', // trans press down
    marginHorizontal: 0,
    marginTop: 10,
    marginBottom: 90,
    // borderRadius: 10,
    padding:5,
  },
  exportContainer: {
    width: width-30,
    marginLeft: 15,
    backgroundColor: 'rgba(255,255,255,0)', // trans press down
    marginHorizontal: 0,
    paddingTop: 200,
    paddingBottom: 90,
    height,
    marginBottom: 120,
    borderRadius: 10,
    padding:5,
  },
  exportText: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'Gill Sans',
    fontWeight: '100',
    marginBottom: 10,
    shadowColor: '#fff',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1.0,
    shadowRadius: 1,
  },
  exportBandText: {
    fontWeight: '600'
  },
  button: {
    // position: 'absolute',
    // bottom: 0,
    backgroundColor: 'transparent',
    // borderWidth: 2,
    // borderColor: 'yellow',
    width,
  },
  buttonText: {
    textAlign: 'center',
    color: colors.white,
    paddingVertical: 5,
  },
});
