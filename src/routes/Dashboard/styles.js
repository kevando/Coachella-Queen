import { StyleSheet, Dimensions } from 'react-native';
import { colors, width, height, } from '../../config/styles';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'blue',
    // borderWidth: 2,
    // borderColor: 'yellow',
    width,
    height,
  },
  contentContainer: {
    // flex: 1,
    // backgroundColor: 'blue',
    position: 'absolute',
    top: 0,
    // borderWidth: 2,
    // borderColor: 'yellow',
    width,
    height,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: colors.white,
    backgroundColor: 'transparent',
    marginTop: 40,
  },
  listContainer: {
    width: width-30,
    marginLeft: 15,
    backgroundColor: 'rgba(255,255,255,0.4)', // trans press down
    // borderWidth: 1,
    // borderColor: '#bbb',
    marginHorizontal: 0,
    marginTop: 20,
    marginBottom: 120,
    borderRadius: 10,
    padding:5,


  },
  exportContainer: {
    width: width-30,
    marginLeft: 15,
    backgroundColor: 'rgba(255,255,255,0)', // trans press down
    marginHorizontal: 0,
    marginTop: 190,
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
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'transparent',
    // borderWidth: 2,
    // borderColor: 'yellow',
    width,
  },
  buttonText: {
    textAlign: 'center',
    color: '#ccc',
    paddingVertical: 15,
  },
});
