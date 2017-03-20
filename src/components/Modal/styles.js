import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../config/styles';

const window = Dimensions.get('window');

export default styles = StyleSheet.create({
  container: {
    // flex: 1,
    position: 'absolute',
    top: 100,
    left: 20,
    width: window.width-40,
    height: window.height-200,
    backgroundColor: '#fff',
    marginVertical: 0,
    marginHorizontal: 0,
    paddingVertical:5,
    paddingHorizontal:10,
    borderColor: 'rgba(100,100,100,0.9)',
    borderWidth: 1,
  	// backgroundColor: 'grey',
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOpacity: 0.99,
    shadowRadius: 100,
    shadowOffset: {
      height: 0,
      width: 0
    }

  },
  closeBar: {
    // backgroundColor:'yellow',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: colors.grey,
    borderBottomWidth: 1,
    alignItems: 'flex-end'
  },
  closeIcon: {
    backgroundColor: colors.grey,
    borderRadius:40,
    borderWidth:1,
    borderColor:colors.grey,
    width:30,
    height:30,
  },

});

export const iconStyle = {
  style: {
    backgroundColor: 'transparent',
    fontSize: 30,
    textAlign:'center',
    color: '#fff'
  }
}
