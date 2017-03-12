import React from 'react';
import { View, ListView, Text, CameraRoll } from 'react-native';
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

    CameraRoll.saveToCameraRoll(uri, 'photo', function(data) {
      // console.log(data);
      // this doesnt work but whatever
      alert('photo saved to camera roll')
  }, function(err) {
      // console.log(err);
      alert('ERROR saving to camera roll')
  });
  }

  render() {
    const { daySchedule } = this.props;

    return (
      <View style={styles.container} ref="viewContainer" >
        <Text style={styles.title}>Coachella Queen</Text>
        <View style={styles.textContainer}>
          {_.map(daySchedule,(event,i)=> {return (
            <Text style={styles.text} key={i}>{moment(event.start).format('h:mm')} @ {event.stage} - {event.name}</Text>
          )})}
        </View>
        <Text style={{marginTop: 50}} onPress={this.onExportPress.bind(this)}>Export</Text>
      </View>
    );
  }


}


export default Preview;
