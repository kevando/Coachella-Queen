import React from 'react';
import { View, Text, TouchableOpacity, AlertIOS } from 'react-native';
import { Icon } from 'native-base';
// Redux instead of passing a func to determine if this should show
import { connect } from 'react-redux';

import Routes from '../../config/routes';
import styles from './styles';

const Fire = (count) => {
  if(count > 10) return <Text style={{fontSize:15,marginTop:-6}}>&nbsp;&nbsp;&nbsp;🔥</Text> // Too much!
  if(count > 8) return <Text style={{fontSize:8,marginTop:-5}}>&nbsp;&nbsp;&nbsp;🔥</Text> // Just right
  if(count > 4) return <Text style={{fontSize:6,marginTop:0}}>&nbsp;&nbsp;&nbsp;🔥</Text> // a few more
  if(count > 0) return <Text style={{fontSize:4,marginTop:4}}>&nbsp;&nbsp;&nbsp;🔥</Text> // Too much!
}

const PreviewButton = ({ navigator, day, mySchedule }) => {

  const onPress = mySchedule.length > 0
  ?
  () => navigator.push(Routes.getPreviewRoute(day))
  :
  () => {
    AlertIOS.alert( 'Hold up, there', 'Pick a band before doing this', [ {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'}, {text: 'ok', onPress: () => console.log('Install Pressed')}, ], );
  }


  return (
    <TouchableOpacity onPress={onPress} style={styles.touchable}>
      <View style={{width:40,height:50,backgroundColor: 'transparent',marginBottom:-50,zIndex:22,borderColor:'white',borderWidth:0}} ><Icon ios='ios-calculator' android="md-calculator" style={{color: '#fff',fontSize: 37}}/></View>
      <View style={{width:40,height:50,backgroundColor: 'transparent',zIndex:20}} >{Fire(mySchedule.length)}</View>
    </TouchableOpacity>
  );
}

const mapStateToProps = (state) => {
  return {
    mySchedule: state.events.mySchedule
  };
};


export default connect(mapStateToProps)(PreviewButton)
