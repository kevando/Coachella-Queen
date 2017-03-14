import React from 'react';
import { View, Text, TouchableOpacity, AlertIOS } from 'react-native';
import { Icon } from 'native-base';
import { connect } from 'react-redux';
import _ from 'lodash';
import moment from 'moment';

import Routes from '../../config/routes';
import styles from './styles';

const Fire = (count) => {
  if(count > 6) return <Text style={{fontSize:12,marginTop:-4}}>&nbsp;&nbsp;🔥</Text> // Too much!
  if(count > 4) return <Text style={{fontSize:9,marginTop:-3}}>&nbsp;&nbsp;🔥</Text> // Just right
  if(count > 2) return <Text style={{fontSize:8,marginTop:0}}>&nbsp;&nbsp;&nbsp;🔥</Text> // a few more
  if(count > 0) return <Text style={{fontSize:6,marginTop:4}}>&nbsp;&nbsp;&nbsp;🔥</Text> //  more!
}

const PreviewButton = ({ navigator, day, mySchedule }) => {

  var mySchedule = _.filter(mySchedule, (event) => { return moment(event.start).format('dddd') == day })

  const onPress = () => {

      if(mySchedule.length == 0)
        return AlertIOS.alert( 'Hold up', 'Pick a band before doing this', [ {text: 'Ok', onPress: () => console.log('Cancel Pressed'), style: 'cancel'}, ], );
      else if (mySchedule.length == 1)
        return AlertIOS.alert( 'Okay, you picked one', 'Continue selecting for maximum levels', [ {text: 'ok', }, ], );
      else if(mySchedule.length > 5)
        return AlertIOS.alert( 'Woah, buddy', 'You probably cant see all of those bands ', [ {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'}, {text: 'I dont care', onPress: () => navigator.push(Routes.getPreviewRoute(day))}, ], );
      else
        return navigator.push(Routes.getPreviewRoute(day))
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
