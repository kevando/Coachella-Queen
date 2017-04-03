import { StyleSheet } from 'react-native';
import { colors, width, height } from '../../config/styles';

export default styles = StyleSheet.create({

  wrapper: {
    position: 'absolute',
    height,
    width,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchableOverlay: {
    position: 'absolute',
    height,
    width,
    top: 0,
  },
  overlay: {
    position: 'absolute',
    height,
    width,
    top: 0,
    backgroundColor: 'rgba(23,22,31,0.85)',
  },

  container: {
    width: width-40,
    backgroundColor: 'transparent',
    borderColor: 'rgba(100,100,100,0.5)',
  },
  closeBar: {
    backgroundColor:'#5FAB3E',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: '#306732',
    borderBottomWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    color: colors.white,
    fontSize: 16,
    letterSpacing: 2,
    fontWeight: '600',
    textAlign: 'center',
  },
  closeIcon: {
    position: 'absolute',
    right: 20,
  },
  content: {
    // height: 150,
    // flex: 'flexGrow',
    backgroundColor: 'green',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    // zIndex: 999
  }

});

export const iconStyle = {
  style: {
    backgroundColor: 'transparent',
    fontSize: 40,
    textAlign:'center',
    color: '#408025',

  }
}
