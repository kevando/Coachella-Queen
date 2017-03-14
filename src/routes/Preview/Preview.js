import React from 'react';
import { View, ListView, Text, CameraRoll } from 'react-native';
import { Icon } from 'native-base';
import _ from 'lodash';
import moment from 'moment';
import { takeSnapshot } from 'react-native-view-shot';

import { EventListItem } from '../../components';



import styles from './styles';

// const Preview = (props) => {
//tmp?
class Preview extends React.Component {

  onExportPress(){
    // console.log('export press',this.refs)
    var This = this;
    takeSnapshot(this.refs["viewContainer"], {
      format: "jpeg",
      quality: 0.8
    })
    .then(
      uri => This.savePhoto(uri),
      error => console.error("Oops, snapshot failed", error)
    );
  }

  savePhoto(uri) {
    CameraRoll.saveToCameraRoll(uri, 'photo');
    alert('Schedule saved to camera roll. Now set it as your background :)')
  }

  render() {
    const { daySchedule } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.exportText} onPress={this.onExportPress.bind(this)}><Icon name="ios-share" style={{color:"white"}} /></Text>
        <View ref="viewContainer" style={styles.viewContainer} >
          <View style={styles.textContainer}>
            {_.map(daySchedule,(event,i)=> {return (
              <Text style={styles.text} key={i}>{moment(event.start).format('h:mm')} @ {event.stage} - {event.name}</Text>
            )})}
          </View>
        </View>
      </View>
    );
  }


}


export default Preview;
