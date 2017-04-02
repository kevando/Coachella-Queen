import { StyleSheet, Dimensions } from 'react-native';
import { colors, width, height } from '../../config/styles';


export default styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'transparent',
    marginTop: 5,
    height,
    width,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  skyContainer: {
    flex: 5,
    backgroundColor: colors.blue,
  },
  grassContainer: {
    height: 49,
    borderColor: colors.green,
    borderTopWidth:5,
  },
  sunTouch: {
    position: 'absolute',
    right: 40,
    top: 50,
    width: 100,
    height: 100,
    borderColor: 'yellow',
    borderWidth: 0,
    zIndex:2
  },
  textContainer: {
    flex: 1,
    paddingTop: 170,
    paddingLeft: 20,
  },
  title: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'left',
    fontWeight: '400',
    lineHeight:37,
    marginTop:15,
    backgroundColor: 'transparent',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'left',
    fontWeight: '300',
    lineHeight:20,
    marginTop:15,
    backgroundColor: 'transparent',
  },
  button: {
    marginTop:30,width: 150, textAlign: 'center',borderColor:'#fff',color:'#fff',borderWidth:0,paddingVertical: 10,
    backgroundColor: 'transparent',
  }



});
