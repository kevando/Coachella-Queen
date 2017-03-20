import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../config/styles';

const window = Dimensions.get('window');

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'blue',
    // borderWidth: 2,
    // borderColor: 'yellow',
    width: window.width,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: colors.white,
    backgroundColor: 'transparent',
    marginTop: 40,
  },
  listContainer: {
    width: window.width-30,
    marginLeft: 15,
    backgroundColor: 'rgba(255,255,255,0.4)', // trans press down
    // borderWidth: 1,
    // borderColor: '#bbb',
    marginHorizontal: 0,
    marginTop: 20,
    marginBottom: 120,
    borderRadius: 10,
    padding:5,
    // shadowColor: '#000000',
    // shadowOffset: {
    //   width: 30,
    //   height: 30
    // },
    // shadowRadius: 5,
    // shadowOpacity: 1.0
    //

  },
  exportContainer: {
    width: window.width-30,
    marginLeft: 15,
    backgroundColor: 'rgba(255,255,255,0.4)', // trans press down
    // borderWidth: 1,
    // borderColor: '#bbb',
    marginHorizontal: 0,
    marginTop: 150,
    // marginBottom: 120,
    borderRadius: 10,
    padding:5,


  },
  button: {
    position: 'absolute',
    bottom: 10,
    backgroundColor: 'transparent',
    // borderWidth: 2,
    // borderColor: 'yellow',
    width: window.width,
  },
  buttonText: {
    textAlign: 'center',
    color: '#555',
  },
});
