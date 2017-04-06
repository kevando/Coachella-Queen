import React from 'react';
import { View, ListView, Text, TouchableOpacity, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import moment from 'moment';

import { ContactInfo,  } from '../../components';
import styles from './styles';
import { getMyDaySchedule, getDaySchedule, getScheduleByDay } from '../../config/helpers';

const Export = (props) => {

  const { mySchedule, smartSchedule, day, onPress, setEmergencyDetails } = props;

  const smartDaySchedule = getScheduleByDay(smartSchedule,props.day);

  const myDaySchedule = _.filter(smartDaySchedule,(event) => { return event.interest == 'yes' })

  return (
    <View style={{flex:1,backgroundColor:'transparent'}}>
      <ContactInfo setEmergencyDetails={setEmergencyDetails} {...props.app} />
      <View style={styles.optionsContainer} >
        <TouchableOpacity>
          <Text style={styles.saveOptionText}>Save to Camera roll</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.saveOptionText}>I{"'"}ll just take a screenshot</Text>
        </TouchableOpacity>
      </View>
    <TouchableOpacity onPress={onPress}>
    <View style={styles.exportContainer}>
    <StatusBar hidden={true} />
      {
        _.map(myDaySchedule,(event, i) => {
          return (
            <Text style={styles.exportText} key={i} >
              <Text style={styles.exportStartText}>{moment(event.start).format('h:mm')} </Text>
              <Text style={styles.exportBandText}>{event.name} </Text>
              <Text style={styles.exportStageText}>{event.stage}</Text>
            </Text>
          )
        })
      }

      </View>
      </TouchableOpacity>
      </View>
  );
}



export default Export;
