import React, { Component } from 'react';
import { Image, StyleSheet, View, CameraRoll } from 'react-native';
import { Container, Header, Title, ListItem, Content, Button, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { takeSnapshot } from "react-native-view-shot";
// cross platform dirs:
// const { CacheDir, DocumentDir, MainBundleDir, MovieDir, MusicDir, PictureDir } = dirs;

export default class Preview extends Component {

  onExportPress(){
    // console.log('export press',this.refs)
    var This = this;
    takeSnapshot(this.refs["imageContainer"], {
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
        return (

            <View ref="viewContainer" style={{flex:1,backgroundColor:'yellow', padding:10,marginTop:80}}>

              <Image ref="imageContainer" source={require('../images/bg1.png')} style={styles.container} >
                <View style={styles.setlistContainer} >
                    <Text>My Schedule</Text>
                    {
                      _.map(this.props.schedule,function(event,i) {

                        return (
                          <Text key={i} >{event.name}</Text>
                        );
                      })
                    }
                    </View>
                  </Image>
                  <Button onPress={this.onExportPress.bind(this)}><Text>export</Text></Button>
                  </View>
        );
      }
}


var styles = StyleSheet.create({
  container: {
    flex: 1,
    // remove width and height to override fixed static size
    width: null,
    height: null,
  },
  setlistContainer: {
    position:'absolute',
    backgroundColor:'transparent',
    width: 250,
    borderWidth:1,
    borderColor: '#fff',
    marginTop: 25,
    marginLeft: 15,
  }
});
