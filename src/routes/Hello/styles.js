import { StyleSheet } from 'react-native';
import { colors, width, height, SUN_RADIUS } from '../../config/styles';

export default styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'transparent',
    marginTop: 5,
    height,
    width,
  },
  sun: {
    position: 'absolute',
    right: 30,
    width: 100,
    height: 100,
    borderRadius: SUN_RADIUS/2,
    backgroundColor: colors.yellow,
    zIndex:0
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
    paddingTop: 70,
    paddingHorizontal: 30,
  },
  titleFest: {
    color: colors.white,
    fontSize: 60,
    textAlign: 'left',
    fontWeight: '600',
    marginTop:15,
    backgroundColor: 'transparent',
    letterSpacing: 5,
  },
  titleQueen: {
    color: colors.white,
    fontSize: 48,
    textAlign: 'left',
    fontWeight: '500',
    backgroundColor: 'transparent',
    letterSpacing: 0.1,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textAlign: 'left',
    fontWeight: '300',
    lineHeight: 28,
    marginTop: 15,
    backgroundColor: 'transparent',
  },
  optionsLabel: {
    color: colors.white,
    fontSize: 14,
    textAlign: 'left',
    fontWeight: '300',
    lineHeight: 23,
    marginBottom: 15,
    marginTop: 30,
    backgroundColor: 'transparent',
  },
  button: {
    marginBottom:30,
    width: 200,
    textAlign: 'center',
    borderColor: colors.white,
    color: colors.white,
    borderWidth:1,
    paddingVertical: 10,
    backgroundColor: 'transparent',
  },
  selected: {
    backgroundColor: colors.white,
    color: 'rgba(155,155,155,0.6)',
  }
});
